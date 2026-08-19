"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const hobbies = [
  {
    icon: "🖨️",
    title: "3D Printing",
    description: "Designing and printing custom lab equipment, optical mounts, and fun gadgets.",
    images: [
      "/images/about/3D Printing/0ba812736c7fa4c7411ad8f2706e2756.jpg",
      "/images/about/3D Printing/106d3b9487097020c6a4f4bee10d5408.jpg",
      "/images/about/3D Printing/124e08c7a5d3ab6738dd382f06e7e9ca.jpg",
      "/images/about/3D Printing/4d19fdf6569c4a01276e54d6907a1a05.jpg",
      "/images/about/3D Printing/5437eb58c4db94cd89c3f5bc87af0bd6.jpg",
    ],
    color: "#FF6B9D",
  },
  {
    icon: "🎹",
    title: "Music",
    description: "Piano player, currently learning violin. Music keeps me balanced.",
    images: [],
    color: "#C084FC",
  },
  {
    icon: "🔬",
    title: "Optical Alignment",
    description: "There's something meditative about aligning optics at 2 AM.",
    images: [
      "/images/about/Alignment/7758f0d98512848d8702289c0a7bdbb8.jpg",
      "/images/about/Alignment/d38f037b049dca7e57930e0f3acfb479.jpg",
    ],
    color: "#22D3EE",
  },
  {
    icon: "🎨",
    title: "Blender & Science Viz",
    description: "Rendering optical setups and making science visual and beautiful.",
    images: [],
    color: "#FB923C",
  },
];

function HobbyCard({
  hobby,
  index,
  onOpen,
}: {
  hobby: (typeof hobbies)[number];
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    el.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  };

  const reset = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(600px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <ScrollReveal variant="fadeUp" delay={index * 0.12}>
      <div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onClick={onOpen}
        className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-300 group"
      >
        {/* Preview image or gradient */}
        <div className="relative h-40 overflow-hidden">
          {hobby.images.length > 0 ? (
            <Image
              src={hobby.images[0]}
              alt={hobby.title}
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), 500px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-6xl"
              style={{
                background: `linear-gradient(135deg, ${hobby.color}20, ${hobby.color}05)`,
              }}
            >
              {hobby.icon}
            </div>
          )}
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0F0A1A] to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{hobby.icon}</span>
            <h3
              className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold"
              style={{ color: hobby.color }}
            >
              {hobby.title}
            </h3>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{hobby.description}</p>
          {hobby.images.length > 0 && (
            <p className="text-white/30 text-xs mt-3 group-hover:text-white/50 transition-colors">
              Click to see more →
            </p>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function HobbiesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="hobbies" className="relative py-28 px-6 max-w-5xl mx-auto overflow-hidden">
      <GradientBlob color1="#FF6B9D" color2="#FB923C" size={450} className="-top-20 -left-40" />
      <GradientBlob color1="#C084FC" color2="#22D3EE" size={400} className="bottom-0 -right-40" />
      <SectionHeading>Hobbies &amp; Interests</SectionHeading>

      <div className="grid md:grid-cols-2 gap-6">
        {hobbies.map((hobby, i) => (
          <HobbyCard
            key={hobby.title}
            hobby={hobby}
            index={i}
            onOpen={() => hobby.images.length > 0 && setExpanded(i)}
          />
        ))}
      </div>

      {/* Expanded gallery modal */}
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-brand-dark border border-white/10 p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{hobbies[expanded].icon}</span>
                  <h3
                    className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold"
                    style={{ color: hobbies[expanded].color }}
                  >
                    {hobbies[expanded].title}
                  </h3>
                </div>
                <button
                  onClick={() => setExpanded(null)}
                  className="text-white/40 hover:text-white transition-colors text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              <p className="text-white/50 text-sm mb-5">
                {hobbies[expanded].description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hobbies[expanded].images.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10"
                  >
                    <Image
                      src={src}
                      alt={`${hobbies[expanded].title} ${i + 1}`}
                      fill
                      sizes="(max-width: 767px) 50vw, 288px"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
