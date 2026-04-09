"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorTrail() {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const handler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-pink/50 pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}
