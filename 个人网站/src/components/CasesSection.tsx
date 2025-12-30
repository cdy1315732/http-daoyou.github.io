import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  BookOpen,
  Baby,
  Users,
  FileCheck,
  Car,
  UtensilsCrossed,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import CozeChatDialog from "./CozeChatDialog";
import DifyEmbedDialog from "./DifyEmbedDialog";

const cases = [
  {
    icon: BookOpen,
    title: "儿童好坐姿绘本生成",
    description:
      "基于儿童行为引导与健康习惯养成需求，面向 3-12 岁儿童设计的、以趣味故事 + 直观示范为核心的错误坐姿矫正主题儿童绘本智能生成方案。",
    tags: ["AIGC", "教育", "图像生成"],
    link: "https://www.coze.cn/store/agent/7581865917240393778?bot_id=true",
  },
  {
    icon: Baby,
    title: "儿童陪伴系统",
    description:
      "儿童陪伴系统以温柔耐心的方式陪伴孩子学习，启发思考，循序引导解题，鼓励努力，助力成长，成为孩子的贴心学习小伙伴。",
    tags: ["LLM", "儿童", "陪伴"],
    link: "",
    isChat: true,
    chatType: "child",
  },
  {
    icon: Users,
    title: "人事系统",
    description:
      "通过人事系统让员工熟悉公司的规章制度。",
    tags: ["企业", "自动化", "HR"],
    link: "",
    isChat: true,
    chatType: "hr",
  },
  {
    icon: FileCheck,
    title: "合同审查系统",
    description:
      "合同审查系统专业审阅合同条款，依据用户提示精准分析，提供详细合规意见，助您规避法律风险，提升合同管理效率。",
    tags: ["法律", "风控", "文档"],
    link: "https://www.coze.cn/store/agent/7569543574229401636?bot_id=true",
  },
  {
    icon: Car,
    title: "汽车安抛识别系统",
    description:
      "精准识别汽车是否为安全抛锚范围内。",
    tags: ["CV", "安全", "IoT"],
    link: "",
    isEmbed: true,
    embedUrl: "https://udify.app/chatbot/hz7yMBanPWGWBhnN",
  },
  {
    icon: UtensilsCrossed,
    title: "中华食谱大全",
    description:
      "这是一款制作中国美食的小助手，可以通过输入想吃的菜品让我为你普及制作菜品的食材和步骤。",
    tags: ["生活", "推荐", "生成"],
    link: "https://www.coze.cn/store/agent/7565818429207609398?bot_id=true",
  },
];

// Chat configurations
const chatConfigs = {
  hr: {
    botId: "7567663733745893403",
    title: "人事系统",
    welcomeMessage: "您好！我是人事系统，可以帮助您了解公司的规章制度。请问有什么可以帮您的？",
    quickQuestions: ["如何领办公用品", "报销流程", "更换与维修"],
  },
  child: {
    botId: "7562811644737929235",
    title: "儿童陪伴系统",
    welcomeMessage: "你好呀小朋友！我是你的学习小伙伴，有什么问题都可以问我哦～",
    quickQuestions: ["讲个故事", "帮我解题", "今天学什么"],
  },
};

const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeChatType, setActiveChatType] = useState<"hr" | "child" | null>(null);
  const [activeEmbed, setActiveEmbed] = useState<{ title: string; url: string } | null>(null);

  const handleCardClick = (item: typeof cases[0]) => {
    if (item.isChat && item.chatType) {
      setActiveChatType(item.chatType as "hr" | "child");
    } else if (item.isEmbed && item.embedUrl) {
      setActiveEmbed({ title: item.title, url: item.embedUrl });
    } else if (item.link) {
      const newWindow = window.open(item.link, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        window.location.href = item.link;
      }
    }
  };

  const activeConfig = activeChatType ? chatConfigs[activeChatType] : null;

  return (
    <section id="cases" className="relative py-24">
      {/* 背景 */}
      <div className="absolute inset-0 lines-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            智能Agent案例
          </span>
          <h2 className="mt-6 text-4xl font-bold">
            <span className="gradient-text">AI产品实践</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            从构思到落地，每一个智能Agent都是对AI技术商业化落地的深度探索
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glow-card glow-border overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCardClick(item);
                  }}
                  className="group/btn inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 hover:bg-primary/5 px-3 py-1.5 -ml-3 rounded-md transition-colors cursor-pointer relative z-20 self-start"
                >
                  {item.isChat || item.isEmbed ? "开始对话" : "了解详情"}
                  {item.isChat || item.isEmbed ? (
                    <MessageCircle className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                  ) : (
                    <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeConfig && (
        <CozeChatDialog
          open={!!activeChatType}
          onOpenChange={(open) => !open && setActiveChatType(null)}
          botId={activeConfig.botId}
          title={activeConfig.title}
          welcomeMessage={activeConfig.welcomeMessage}
          quickQuestions={activeConfig.quickQuestions}
        />
      )}

      {activeEmbed && (
        <DifyEmbedDialog
          open={!!activeEmbed}
          onOpenChange={(open) => !open && setActiveEmbed(null)}
          title={activeEmbed.title}
          embedUrl={activeEmbed.url}
        />
      )}
    </section>
  );
};

export default CasesSection;
