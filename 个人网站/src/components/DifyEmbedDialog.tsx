import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bot } from "lucide-react";

interface DifyEmbedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  embedUrl: string;
}

const DifyEmbedDialog = ({ open, onOpenChange, title, embedUrl }: DifyEmbedDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[700px] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={embedUrl}
            style={{ width: "100%", height: "100%", minHeight: "600px" }}
            frameBorder="0"
            allow="microphone"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DifyEmbedDialog;