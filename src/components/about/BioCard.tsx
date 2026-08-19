"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BioCard() {
  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-10 items-center">
      <ScrollReveal variant="fadeLeft">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mx-auto w-60 h-60 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-brand-pink via-brand-purple to-brand-cyan p-[3px]"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/images/about/Self-portrait/8a35577dce5df4d7474dcc47d06a5eb1.jpg"
              alt="Huaiyue Peng"
              fill
              sizes="(max-width: 767px) 240px, 288px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </ScrollReveal>

      <ScrollReveal variant="fadeRight" delay={0.2}>
        <div className="space-y-4 text-white/70 text-base leading-relaxed">
          <p>
            I&apos;m a PhD candidate in Chemistry at{" "}
            <span className="text-brand-cyan font-medium">UC San Diego</span>,
            working at the intersection of{" "}
            <span className="text-brand-pink font-medium">ultrafast optics</span>,{" "}
            <span className="text-brand-purple font-medium">nonlinear photonics</span>,
            and{" "}
            <span className="text-brand-orange font-medium">pulse shaping</span>.
            Previously I earned my M.S. in Applied Physics at Yale and a triple-major
            B.Sc. at HKUST, with a semester at ETH Zurich.
          </p>
          <p>
            My research spans high-resolution spectral pulse shapers, optical parametric
            amplification, HHG, THz spectroscopy, and inverse design of photonic systems.
          </p>
          <p>
            When I&apos;m not aligning optics in the lab, you&apos;ll find me
            3D-printing custom lab equipment, coding simulations in Python,
            rendering optical setups in Blender, or practicing violin.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
