"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      onClick={() => setFlipped(!flipped)}
      className="relative h-80 cursor-pointer [perspective:1000px]"
    >
      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col [backface-visibility:hidden] overflow-hidden"
          >
            <div className="w-full h-32 rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 mb-4 flex items-center justify-center text-3xl">
              🔬
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-brand-purple/20 text-brand-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-brand-purple/10 border border-white/10 rounded-2xl p-6 flex flex-col [backface-visibility:hidden]"
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm flex-1 leading-relaxed">
              {project.longDescription}
            </p>
            {project.links.length > 0 && (
              <div className="flex gap-3 mt-4">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-brand-cyan hover:underline"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            )}
            <p className="text-white/30 text-xs mt-3">Click to flip back</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
