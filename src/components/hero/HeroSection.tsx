"use client";
import dynamic from "next/dynamic";
import { HeroText } from "./HeroText";

const ParticleScene = dynamic(
  () => import("./ParticleScene").then((m) => ({ default: m.ParticleScene })),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-dark">
      <ParticleScene />
      <HeroText />
    </section>
  );
}
