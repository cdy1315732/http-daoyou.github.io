import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    company: "篱笆墙科技集团有限公司",
    position: "AI产品经理",
    period: "2022.04 - 2025.11",
    location: "杭州",
    responsibility: "统筹 B2B/B2C 双赛道 AI 产品，推动 AIGC 技术商业化落地",
    achievements: ["B 端营收破 356 万", "C 端年增收 28.8 万", "AIGC 成本降 64.8%"],
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    company: "杭州瑛蔓医疗科技有限公司",
    position: "体验设计师+产品助理",
    period: "2020.12 - 2022.03",
    location: "杭州",
    responsibility: "主导医疗 SaaS 产品全周期管理，优化体验与业务流程",
    achievements: ["协作效率提 30%", "决策效率提 40%", "用户满意度 85%+"],
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
  },
  {
    company: "上海微芒教育科技有限公司",
    position: "UI设计师",
    period: "2019.06 - 2020.11",
    location: "上海",
    responsibility: "负责教育产品全链路视觉与交互设计，推动体验迭代",
    achievements: ["界面还原度 98%", "流畅度提 25%", "设计资产全复用"],
    iconColor: "text-glow-purple",
    iconBg: "bg-glow-purple/10",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            工作经历
          </span>
          <h2 className="mt-6 text-4xl font-bold">
            <span className="gradient-text">职业旅程</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* 时间线 - 固定在左侧 */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-glow-purple md:left-8" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12 pl-16 md:pl-24"
              >
                {/* 时间线节点 */}
                <div className="absolute left-0 top-6 flex h-4 w-4 items-center justify-center rounded-full bg-primary md:left-[26px]">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>

                <div className="glow-card glow-border p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${exp.iconBg}`}>
                      <Building2 className={`h-6 w-6 ${exp.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                        <span className="font-medium text-primary">{exp.position}</span>
                        <span className="text-muted-foreground">{exp.period}</span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/80">职责：</span>
                    {exp.responsibility}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
