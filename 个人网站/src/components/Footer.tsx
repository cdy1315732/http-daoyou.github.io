import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row"
        >
          <div className="flex items-center gap-1">
            <span>© 2024 常道友</span>
            <span className="mx-2">·</span>
            <span>AI产品经理</span>
          </div>
          <div className="flex items-center gap-1">
            <span>用</span>
            <Heart className="h-3 w-3 text-accent" />
            <span>打造有温度的AI产品</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
