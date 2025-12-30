import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck, BookOpen, TrendingUp, Building2 } from "lucide-react";

const projects = [
  {
    icon: FileCheck,
    title: "智能合同审查系统",
    company: "篱笆墙科技集团有限公司",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    background: {
      strategy: "主营业务是为B端企业提供「智能印章管理」的SaaS平台，核心是解决企业的「物理用印安全」问题，打造全流程「安全用印」体系。",
      painPoint: "面向企业法务（提效）与中小企业管理层（替代外包）两类核心客群。传统审查深受「效率低、成本高、标准乱」的困扰：人工审查长篇幅合同平均耗时超2小时/份，且因经验差异导致风控标准离散，极易遗漏隐性风险，而依赖外包服务则面临高昂的成本压力。",
    },
    responsibilities: [
      "痛点调研与功能定义：洞察「管章不管内容」的业务断点，针对金融/建筑行业痛点构建「内容风控+实体管控」的全链路安全闭环；基于1+家标杆客户，明确产品的目标用户和核心功能，并将这些需求转化为技术开发任务。",
      "指标体系与体验优化：构建「功能性任务+内容生成质量」的双维评估体系，确立「条款召回率、风险分类准确率、解释完整性、内容真实性」4大核心指标。进行日/周维度效果监控，支撑产品与算法协同迭代，提升用户满意度92%。",
      "跨团队协调与落地：与算法工程师、开发团队、测试团队等紧密协作，理解算法和模型的开发进程及限制，协调技术与非技术团队，确保产品能够顺利落地。",
      "RAG优化与审查提效：针对多源异构数据，设计企业级RAG架构。建立结构化元数据+语义向量的双路索引体系，结合混合检索+Reranker重排策略，将检索召回率由63%→96%，准确率由72%→92%，单份合同处理时效从2小时缩减至5分钟。",
      "Agent策略设计：主导核心算法策略攻坚。摒弃通用纠错逻辑，设计「甲乙方立场博弈」的对抗性审查Agent，定义「进攻型（甲方）」「防守型（乙方）」两套审查标准，精准识别高危条款，通过差异化Prompt链显著提升隐性风险（如赔偿上限、验收陷阱）的召回率。",
    ],
    results: [
      {
        title: "业务成果",
        content: "实现审查效能与成本优化的双重跃升。将单份合同审查周期从2小时压缩至5-10分钟，显著加速业务流转；同时替代昂贵的人工/外包服务，帮助客户企业每年节省审查成本约57.6万元，构建低成本、高标准的合规闭环。",
      },
      {
        title: "商业目标",
        content: "落地60+家用户，SaaS订阅额突破356万，同时加固企业内部竞争壁垒，品牌战略从「安全」升级到「硬件安全+AI内容」的智能化风控，与竞争者形成了核心的差异化服务优势。",
      },
    ],
    metrics: [
      { value: "60+", label: "企业客户" },
      { value: "356万", label: "SaaS订阅额" },
      { value: "57.6万", label: "年节省成本" },
    ],
  },
  {
    icon: BookOpen,
    title: "儿童好坐姿绘本生成系统",
    company: "篱笆墙科技集团有限公司",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    background: {
      strategy: "坐坐好这款产品结合儿童观看屏幕时的坐姿/距离/时间监测+AI算法+远程家长介入机制，定位于儿童视力保护与坐姿养成，是一个聚焦「儿童健康习惯养成」智能硬件+App组合产品。",
      painPoint: "在家庭教育场景中，针对3-12岁儿童的习惯养成（如坐姿、卫生、社交礼仪），家长普遍面临「道理都懂，孩子不听」的困境，且「脊柱变形」等抽象后果无法具象化展示，传统的口头说教缺乏感染力。随着AIGC技术的爆发，我们有机会打破内容生产的成本壁垒，将抽象的「好习惯」实时转化为孩子易于接受的可视化漫画，实现「千人千面」的教育引导。",
    },
    responsibilities: [
      "用户洞察与差异化策略：主导12人（内外部双视角）的深度定性调研（DI）。结合竞品功能审计，挖掘出「传统说教导致亲子冲突」的隐性痛点，确立了以「AIGC绘本正向激励」的差异化产品方向，从根本上解决竞品硬件同质化问题。",
      "模型选型与效果调优：主导对Doubao、Flux等模型的四维评测（安全/画质/风格/速度），最终选定豆包（doubao-seedream-4-0）。其兼具儿童的高安全标准与风格适配性，且单图耗时仅3-5秒，完美平衡了合规性与极致体验。",
      "双场景构建与智能协同：构建「硬件监测预警」与「APP主动触发」双链路场景流程，依托Agent与RAG协同实现异常知识库检索与用户偏好匹配。通过内容合规校验驱动定制化漫画生成并同步硬件端展示，保障全场景流程流畅性与内容输出质量，支撑差异化的漫画生成业务体验。",
      "模式升级与降本增收：通过AIGC内容的引入，将内容生产成本从传统外包的￥300-600/条降低至￥0.2-0.3/条（降本99%）。设计会员订阅体系（￥40/月），预计通过差异化AI功能带来年增收￥28.8万，成功将单纯的硬件销售转化为「硬件+内容订阅」的双重营收模式。",
    ],
    results: [
      {
        title: "内容生产成本降低95%",
        content: "利用AIGC技术替代传统插画外包，将单条内容的生产成本从￥300-600/条降低至￥5-10/条。",
      },
      {
        title: "运营推理成本降低64.8%",
        content: "通过「30万资源包预购+4K四宫格切割」的工程化策略，将生图单价从按量计费的￥0.4/张降至￥0.25/张，实现单月运营总成本节省￥37800（从￥58,348降至￥20,548）。",
      },
      {
        title: "解决产品同质化",
        content: "在竞争激烈的儿童智能硬件市场，通过「AIGC绘本生成」建立差异化竞争壁垒，避免陷入单纯的硬件参数内卷。",
      },
    ],
    metrics: [
      { value: "95%", label: "成本降低" },
      { value: "28.8万", label: "年增收" },
      { value: "64.8%", label: "运营成本降低" },
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24">
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
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            项目经历
          </span>
          <h2 className="mt-6 text-4xl font-bold">
            <span className="gradient-text">代表作品</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            深度参与的AI产品项目，从规划到落地的完整实践
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glow-card glow-border overflow-hidden"
            >
              {/* 头部 */}
              <div className="border-b border-border/50 p-6">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${project.iconBg}`}>
                    <project.icon className={`h-7 w-7 ${project.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-3.5 w-3.5" />
                      {project.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* 内容 */}
              <div className="p-6 space-y-6">
                {/* 项目背景 */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    项目背景
                  </h4>
                  <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground/80">战略目标：</span>
                      {project.background.strategy}
                    </p>
                    <p>
                      <span className="font-medium text-foreground/80">用户痛点：</span>
                      {project.background.painPoint}
                    </p>
                  </div>
                </div>

                {/* 个人职责 */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    个人职责
                  </h4>
                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {project.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 最终成果 */}
                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    最终成果
                  </h4>
                  
                  {/* 成果指标 */}
                  <div className="mb-4 grid grid-cols-3 gap-4">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl bg-secondary/50 p-4 text-center"
                      >
                        <div className="gradient-text text-2xl font-bold">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 成果详情 */}
                  <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {project.results.map((result, i) => (
                      <p key={i}>
                        <span className="font-medium text-foreground/80">{result.title}：</span>
                        {result.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;