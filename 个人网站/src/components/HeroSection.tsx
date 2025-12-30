import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/avatar.jpg";

const highlights = [
  { label: "从0到1 AI产品搭建" },
  { label: "AIGC技术转化" },
  { label: "全栈AI认知" },
  { label: "体验设计赋能" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* 纹理背景 */}
      <div className="absolute inset-0 gradient-bg" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234361ee' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* 内容 */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左侧文字 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                AI 产品经理
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold leading-tight lg:text-7xl"
            >
              <span className="gradient-text">常道友</span>
            </motion.h1>

            {/* 标签 - 名字下方一行展示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {highlights.map((item, index) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {item.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg text-xl text-muted-foreground"
            >
              6年互联网产品设计经验，1.5年AI产品实战。
              <br />
              专注将AI技术转化为用户价值，打造有温度的智能产品。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                联系合作
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <button
                onClick={() =>
                  document
                    .getElementById("cases")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative h-11 overflow-hidden rounded border border-primary/50 bg-transparent px-8 text-base text-primary transition-colors duration-300 hover:text-primary-foreground"
              >
                <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                查看案例
              </button>
            </motion.div>
          </div>

          {/* 右侧头像区域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-[360px]">
              {/* 装饰边框 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded border border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded border border-dashed border-accent/30"
              />

              {/* 头像 - 3:4 */}
              <div className="relative aspect-[3/4] overflow-hidden rounded border-2 border-primary/50">
                <img 
                  src={avatarImage}
                  alt="常道友头像" 
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 浮动装饰 */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/4 rounded bg-secondary p-3 shadow-lg border border-primary/30"
              >
                <Bot className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-1/3 rounded bg-secondary p-3 shadow-lg border border-accent/30"
              >
                <Sparkles className="h-6 w-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">向下滚动</span>
          <div className="h-8 w-0.5 rounded-full bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
