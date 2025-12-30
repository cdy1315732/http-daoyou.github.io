import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Zap, RefreshCcw, Palette } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    value: "6年",
    label: "互联网产品经验",
    description: "深耕 B2B/B2C 双赛道产品领域，积累从 0 到 1 搭建、商业化落地的全链路设计与管理经验",
  },
  {
    icon: Zap,
    value: "1.5年",
    label: "AI 产品实战经验",
    description: "聚焦 AI 技术商业化落地，主导 B 端合同风控、C 端儿童教育等场景 AI 产品，实现技术价值向业务收益转化",
  },
  {
    icon: RefreshCcw,
    value: "全链路",
    label: "产品操盘闭环能力",
    description: "从 底层模型选型→评测体系搭建→需求定义→跨团队协同→数据迭代 全流程把控，避免技术与业务脱节",
  },
  {
    icon: Palette,
    value: "体验设计",
    label: "赋能 AI 产品优势",
    description: "融合产品逻辑与 UX 设计能力，把模糊的 AI 技术能力转化为用户可感知的优质体验，打破 AI 产品难用壁垒",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24">
      {/* 背景纹理 */}
      <div className="absolute inset-0 dots-pattern opacity-50" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            关于我
          </span>
          <h2 className="mt-6 text-4xl font-bold">
            <span className="gradient-text">核心优势</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            结合深厚的产品设计背景与前沿AI技术认知，致力于创造真正解决问题的智能产品
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glow-card glow-border flex items-start gap-6 p-8"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="gradient-text mb-1 text-3xl font-bold">
                  {item.value}
                </div>
                <div className="mb-2 text-lg font-semibold">{item.label}</div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
