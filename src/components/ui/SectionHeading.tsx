"use client";
import { motion } from "framer-motion";

export function SectionHeading({ children }: { children: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-gradient font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold mb-12 text-center"
    >
      {children}
    </motion.h2>
  );
}
