"use client";
import { motion } from "framer-motion";
import { interests } from "@/data/interests";

export function InterestTags() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {interests.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          whileHover={{ scale: 1.12, y: -4 }}
          className="px-4 py-2 rounded-full text-sm font-medium text-white cursor-default"
          style={{
            background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`,
          }}
        >
          {item.label}
        </motion.span>
      ))}
    </div>
  );
}
