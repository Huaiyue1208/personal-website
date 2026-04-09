"use client";
import { motion } from "framer-motion";

const name = "Hi, I'm Huaiyue";

export function HeroText() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.04,
              ease: "easeOut",
            }}
            className={char === " " ? "" : "text-gradient inline-block"}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-lg md:text-xl text-white/60 max-w-xl"
      >
        PhD Student in Physics &amp; Optics — exploring ultrafast light
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
