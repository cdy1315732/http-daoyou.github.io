import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* 主光晕 */}
      <div
        className="absolute rounded-full"
        style={{
          left: position.x - 200,
          top: position.y - 200,
          width: 400,
          height: 400,
          background: `radial-gradient(circle, hsl(38 92% 60% / 0.12) 0%, hsl(15 85% 60% / 0.06) 40%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      {/* 核心光点 */}
      <div
        className="absolute rounded-full"
        style={{
          left: position.x - 50,
          top: position.y - 50,
          width: 100,
          height: 100,
          background: `radial-gradient(circle, hsl(38 92% 60% / 0.18) 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

export default MouseGlow;
