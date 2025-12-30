import { motion } from "framer-motion";

const FlowingLines = () => {
  const lines = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(270 91% 65%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190 95% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(190 95% 55%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {lines.map((i) => (
          <motion.path
            key={i}
            d={`M${-100 + i * 50} ${100 + i * 80} Q${300 + i * 100} ${200 + i * 40} ${600 + i * 50} ${150 + i * 60} T${1300 + i * 30} ${300 + i * 50}`}
            stroke={i % 2 === 0 ? "url(#lineGradient1)" : "url(#lineGradient2)"}
            strokeWidth={1.5 - i * 0.1}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 装饰圆点 */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={100 + i * 100}
            cy={100 + (i % 3) * 200}
            r={2}
            fill="hsl(217 91% 60%)"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FlowingLines;
