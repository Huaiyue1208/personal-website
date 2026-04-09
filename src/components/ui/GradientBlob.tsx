"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function GradientBlob({
  color1 = "#FF6B9D",
  color2 = "#C084FC",
  size = 400,
  className = "",
}: {
  color1?: string;
  color2?: string;
  size?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <motion.div
      ref={ref}
      style={{ y, width: size, height: size }}
      className={`absolute rounded-full blur-[100px] opacity-30 pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, ${color1}, ${color2})`,
        }}
      />
    </motion.div>
  );
}
