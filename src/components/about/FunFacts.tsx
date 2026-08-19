"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const facts = [
  {
    icon: "🔬",
    text: "Aligning optics at 2 AM",
    images: [
      "/images/about/Alignment/7758f0d98512848d8702289c0a7bdbb8.jpg",
      "/images/about/Alignment/d38f037b049dca7e57930e0f3acfb479.jpg",
    ],
    label: "Optical Alignment",
  },
  {
    icon: "🖨️",
    text: "3D-printing lab gadgets",
    images: [
      "/images/about/3D Printing/0ba812736c7fa4c7411ad8f2706e2756.jpg",
      "/images/about/3D Printing/106d3b9487097020c6a4f4bee10d5408.jpg",
      "/images/about/3D Printing/124e08c7a5d3ab6738dd382f06e7e9ca.jpg",
      "/images/about/3D Printing/4d19fdf6569c4a01276e54d6907a1a05.jpg",
      "/images/about/3D Printing/5437eb58c4db94cd89c3f5bc87af0bd6.jpg",
    ],
    label: "3D Printing",
  },
  {
    icon: "🏫",
    text: "HKUST memories",
    images: [
      "/images/about/HKUST/795d74ead3b2670a79557c9a37445be2.jpg",
      "/images/about/HKUST/8a35577dce5df4d7474dcc47d06a5eb1.jpg",
      "/images/about/HKUST/94cb9b4c8fcc3ad4b4bc8761cf808ecc.jpg",
      "/images/about/HKUST/e43cdbdb3d2d199bbf4b81b9dd4e217e.jpg",
    ],
    label: "HKUST",
  },
  {
    icon: "🎹",
    text: "Piano & Violin",
    images: [],
    label: "Music",
  },
  {
    icon: "🎨",
    text: "Blender for science viz",
    images: [
    ],
    label: "Science Viz",
  },
];

function TiltCard({
  icon,
  text,
  images,
  label,
  index,
}: {
  icon: string;
  text: string;
  images: string[];
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    if (expanded) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    el.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
  };

  const reset = () => {
    if (ref.current && !expanded)
      ref.current.style.transform =
        "perspective(600px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <>
      <ScrollReveal variant="scaleIn" delay={index * 0.1}>
        <div
          ref={ref}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          onClick={() => setExpanded(true)}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-transform duration-200 cursor-pointer hover:border-brand-pink/30"
        >
          <div className="text-4xl mb-3">{icon}</div>
          <p className="text-white/70 text-sm">{text}</p>
        </div>
      </ScrollReveal>

      {/* Expanded image panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-brand-dark border border-white/10 p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                    {label}
                  </h3>
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="text-white/40 hover:text-white transition-colors text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10"
                  >
                    {/* Placeholder behind image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/15 to-brand-purple/15 flex items-center justify-center text-3xl">
                      {icon}
                    </div>
                    <Image
                      src={src}
                      alt={`${label} ${i + 1}`}
                      fill
                      sizes="(max-width: 767px) 50vw, 288px"
                      className="object-cover z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function FunFacts() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
      {facts.map((f, i) => (
        <TiltCard
          key={f.text}
          icon={f.icon}
          text={f.text}
          images={f.images}
          label={f.label}
          index={i}
        />
      ))}
    </div>
  );
}
