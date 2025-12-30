import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle, Globe, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedItem(label);
    toast.success(`${label}已复制到剪贴板`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "Changdaoyou@163.com",
      action: "link",
      href: "mailto:Changdaoyou@163.com",
    },
    {
      icon: Phone,
      label: "电话",
      value: "13157325197",
      action: "copy",
    },
    {
      icon: MessageCircle,
      label: "微信",
      value: "cdy1975699956",
      action: "copy",
    },
    {
      icon: Globe,
      label: "个人网站",
      value: "人人都是产品经理主页",
      action: "external",
      href: "https://www.woshipm.com/me/posts",
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 gradient-bg" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            联系方式
          </span>
          <h2 className="mt-6 text-4xl font-bold">
            <span className="gradient-text">期待与您交流</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* 联系卡片 - 无底框布局 */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            {contactItems.map((item, index) => {
              const isExternal = item.action === "external";
              const isCopy = item.action === "copy";
              const isCopied = copiedItem === item.label;

              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group flex items-center justify-between rounded-2xl bg-secondary/40 p-5 transition-all hover:bg-secondary/60 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium transition-colors group-hover:text-primary">
                        {item.value}
                      </div>
                    </div>
                  </div>
                  {isExternal && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  )}
                  {isCopy && (
                    isCopied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    )
                  )}
                </motion.div>
              );

              if (isCopy) {
                return (
                  <div key={item.label} onClick={() => handleCopy(item.value, item.label)}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              );
            })}
          </div>

          {/* CTA 文案 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-lg text-muted-foreground"
          >
            欢迎联系我洽谈合作 / 交流 AI 产品
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
