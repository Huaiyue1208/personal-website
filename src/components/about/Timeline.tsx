"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const education = [
  {
    degree: "PhD Candidate in Chemistry",
    school: "UC San Diego",
    period: "2026 — Present",
    color: "#22D3EE",
    x: 72,
    y: 50,
    city: "San Diego",
  },
  {
    degree: "M.S. in Applied Physics",
    school: "Yale University",
    period: "2025 — 2026",
    color: "#C084FC",
    x: 82,
    y: 36,
    city: "New Haven",
  },
  {
    degree: "Exchange, Dept. of Physics",
    school: "ETH Zurich",
    period: "Sep 2023 — Jan 2024",
    color: "#FB923C",
    x: 50,
    y: 30,
    city: "Zurich",
  },
  {
    degree: "B.Sc. in Applied Math,\nPhysics & Computer Science",
    school: "HKUST",
    period: "2020 — 2025",
    color: "#FF6B9D",
    x: 18,
    y: 55,
    city: "Hong Kong",
  },
];

function PulseDot({
  color,
  active,
  onClick,
}: {
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="relative group">
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: color }}
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      {active && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: color }}
          animate={{
            scale: [1, 3.5],
            opacity: [0.3, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      {/* Core dot */}
      <motion.div
        className="relative w-4 h-4 rounded-full cursor-pointer"
        style={{
          background: color,
          boxShadow: `0 0 ${active ? 20 : 10}px ${color}80`,
        }}
        whileHover={{ scale: 1.5 }}
        animate={{ scale: active ? 1.3 : 1 }}
      />
    </button>
  );
}

// Simplified world map paths (Asia + North America focus)
function WorldMap() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* North America */}
      <path
        d="M55,15 L70,12 L78,18 L82,25 L80,32 L75,35 L78,42 L76,48 L72,52 L68,55 L62,58 L58,55 L55,50 L50,48 L48,42 L45,38 L42,30 L44,22 L50,18Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
      {/* Central America */}
      <path
        d="M62,58 L64,62 L63,66 L60,68 L58,65 L59,60Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
      {/* South America */}
      <path
        d="M65,68 L70,65 L75,68 L78,75 L76,82 L72,88 L68,90 L64,85 L62,78 L63,72Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
      {/* Europe */}
      <path
        d="M95,18 L100,15 L108,16 L112,20 L110,25 L105,28 L100,30 L96,28 L93,24Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
      {/* Africa */}
      <path
        d="M98,38 L105,35 L112,38 L115,45 L118,55 L115,65 L110,72 L105,75 L100,70 L97,60 L95,50 L96,42Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
      {/* Asia */}
      <path
        d="M112,14 L125,10 L140,12 L155,15 L160,22 L158,30 L150,35 L145,32 L138,35 L130,38 L125,42 L120,45 L115,50 L118,55 L125,52 L132,48 L138,45 L145,42 L150,45 L155,42 L158,38 L160,32 L155,28 L148,25 L140,22 L130,25 L120,28 L112,25 L110,20Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
      {/* China / East Asia highlight */}
      <path
        d="M130,25 L142,22 L150,28 L148,35 L140,38 L132,35 L128,30Z"
        fill="rgba(255,255,255,0.02)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.3"
      />
      {/* Japan */}
      <path
        d="M155,28 L157,25 L158,30 L156,33 L154,30Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
      {/* Australia */}
      <path
        d="M145,68 L155,65 L162,68 L165,75 L160,80 L152,82 L145,78 L143,72Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.3"
      />
    </svg>
  );
}

// Curved dashed line between two points
function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  color,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  delay: number;
}) {
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - 12;
  const d = `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="0.3"
        strokeDasharray="2 2"
        strokeOpacity={0.3}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function Timeline() {
  const [active, setActive] = useState(0);

  // Map positions as percentages for dot placement
  const dotPositions = education.map((e) => ({ x: e.x, y: e.y }));

  return (
    <ScrollReveal>
      <div className="relative mt-14 mb-4 max-w-3xl mx-auto">
        {/* Map container */}
        <div className="relative aspect-[2/1] w-full">
          <WorldMap />

          {/* Connection lines: HK → Zurich → New Haven → San Diego */}
          <ConnectionLine
            x1={dotPositions[3].x}
            y1={dotPositions[3].y}
            x2={dotPositions[2].x}
            y2={dotPositions[2].y}
            color={education[3].color}
            delay={0.3}
          />
          <ConnectionLine
            x1={dotPositions[2].x}
            y1={dotPositions[2].y}
            x2={dotPositions[1].x}
            y2={dotPositions[1].y}
            color={education[2].color}
            delay={0.7}
          />
          <ConnectionLine
            x1={dotPositions[1].x}
            y1={dotPositions[1].y}
            x2={dotPositions[0].x}
            y2={dotPositions[0].y}
            color={education[1].color}
            delay={1.1}
          />

          {/* Dots */}
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.3, type: "spring" }}
            >
              <PulseDot
                color={item.color}
                active={active === i}
                onClick={() => setActive(i)}
              />

              {/* City label */}
              <p
                className="absolute whitespace-nowrap text-[10px] md:text-xs font-medium mt-1 left-1/2 -translate-x-1/2"
                style={{ color: item.color }}
              >
                {item.city}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info card below the map */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
          >
            <p
              className="text-xs font-medium mb-1 tracking-wider uppercase"
              style={{ color: education[active].color }}
            >
              {education[active].period}
            </p>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl font-bold text-white whitespace-pre-line">
              {education[active].degree}
            </h4>
            <p className="text-white/50 text-sm mt-1">{education[active].school}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {education.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: active === i ? item.color : "rgba(255,255,255,0.2)",
                boxShadow: active === i ? `0 0 8px ${item.color}60` : "none",
                transform: active === i ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
