import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const COZE_API_KEY = Deno.env.get('COZE_API_KEY');
const COZE_API_KEY_CHILD = Deno.env.get('COZE_API_KEY_CHILD');
const DEFAULT_BOT_ID = '7565818429207609398';
const CHILD_BOT_ID = '7562811644737929235';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversation_id, user_id, bot_id } = await req.json();
    
    const targetBotId = bot_id || DEFAULT_BOT_ID;
    console.log('Received request:', { message, conversation_id, user_id, bot_id: targetBotId });

    // Select API key based on bot_id
    const apiKey = targetBotId === CHILD_BOT_ID ? COZE_API_KEY_CHILD : COZE_API_KEY;
    
    if (!apiKey) {
      throw new Error('COZE_API_KEY is not configured for this bot');
    }

    const requestBody: Record<string, unknown> = {
      bot_id: targetBotId,
      user_id: user_id || 'default_user',
      stream: true,
      auto_save_history: true,
      additional_messages: [
        {
          role: 'user',
          content: message,
          content_type: 'text',
        }
      ]
    };

    // Add conversation_id if provided
    if (conversation_id) {
      requestBody.conversation_id = conversation_id;
    }

    console.log('Calling Coze API with streaming:', JSON.stringify(requestBody));

    const response = await fetch('https://api.coze.cn/v3/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('Coze API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Coze API error:', errorText);
      throw new Error(`Coze API error: ${response.status} - ${errorText}`);
    }

    // Parse streaming response
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No response body');
    }

    const decoder = new TextDecoder();
    let fullReply = '';
    let convId = conversation_id;

    let currentEvent = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;
      console.log('Raw chunk received:', chunk.substring(0, 200));
      
      // Process complete SSE messages
      const lines = buffer.split('\n');
      buffer = lines.pop() || ''; // Keep incomplete line in buffer

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;
        
        if (trimmedLine.startsWith('event:')) {
          currentEvent = trimmedLine.slice(6).trim();
        } else if (trimmedLine.startsWith('data:')) {
          const jsonStr = trimmedLine.slice(5).trim();
          if (jsonStr && jsonStr !== '[DONE]') {
            try {
              const data = JSON.parse(jsonStr);
              console.log('Parsed event:', currentEvent, 'role:', data.role, 'type:', data.type);

              // Extract conversation_id
              if (data.conversation_id) {
                convId = data.conversation_id;
              }

              // Handle message events - look for assistant answer type
              if (currentEvent === 'conversation.message.delta' && data.role === 'assistant' && data.type === 'answer') {
                if (data.content) {
                  fullReply += data.content;
                }
              } else if (currentEvent === 'conversation.message.completed' && data.role === 'assistant' && data.type === 'answer') {
                // Use the completed message as the final reply
                if (data.content) {
                  fullReply = data.content;
                }
              }
            } catch (e) {
              console.log('JSON parse error for:', jsonStr.substring(0, 100), e);
            }
          }
        }
      }
    }
    
    // Process any remaining buffer content
    if (buffer.trim()) {
      console.log('Remaining buffer:', buffer.substring(0, 200));
    }

    console.log('Final reply:', fullReply);
    console.log('Conversation ID:', convId);

    return new Response(JSON.stringify({ 
      reply: fullReply || '抱歉，我暂时无法回答这个问题。',
      conversation_id: convId,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in coze-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      reply: '抱歉，服务暂时不可用，请稍后再试。'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
