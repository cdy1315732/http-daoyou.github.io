import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, FileCheck, Baby, ArrowUpRight } from "lucide-react";

const articles = [
  {
    icon: Brain,
    title: "LLM背后的模型训练原理是什么？",
    description:
      "深入浅出解析大语言模型的训练过程，从数据预处理到模型微调，理解AI的核心机制",
    date: "2025年",
    readTime: "15分钟阅读",
    link: "https://www.woshipm.com/ai/6294254.html",
  },
  {
    icon: FileCheck,
    title: "AI 合同审查革命",
    description:
      "AI如何重塑法律文档审查流程，提升效率与准确性的产品实践",
    date: "2025年",
    readTime: "12分钟阅读",
    link: "https://www.woshipm.com/ai/6301599.html",
  },
  {
    icon: Baby,
    title: "智能儿童坐姿矫正",
    description:
      "基于AI视觉技术的儿童健康习惯养成方案，从产品构思到落地的完整复盘",
    date: "2025年",
    readTime: "10分钟阅读",
    link: "",
  },
];

const KnowledgeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="knowledge" className="relative py-24">
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            个人知识
          </span>
          <h2 className="mt-6 text-4xl font-bold">
            <span className="gradient-text">思考与沉淀</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            在AI产品实践中的技术理解与方法论总结
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => {
            const hasLink = !!article.link;
            const Wrapper = hasLink ? motion.a : motion.div;
            const wrapperProps = hasLink
              ? {
                  href: article.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={article.title}
                {...wrapperProps}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group glow-card glow-border block overflow-hidden flex flex-col ${hasLink ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex flex-col p-6 flex-1">
                  <div className="flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 mb-4">
                      <article.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    {hasLink ? (
                      <>
                        了解详情
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    ) : (
                      <span className="text-muted-foreground">即将发布</span>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
