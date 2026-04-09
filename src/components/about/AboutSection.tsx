"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { BioCard } from "./BioCard";
import { Timeline } from "./Timeline";
import { InterestTags } from "./InterestTags";

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-5xl mx-auto overflow-hidden">
      <GradientBlob color1="#FF6B9D" color2="#C084FC" size={500} className="-top-40 -right-40" />
      <GradientBlob color1="#22D3EE" color2="#C084FC" size={400} className="bottom-0 -left-40" />
      <SectionHeading>About Me</SectionHeading>
      <BioCard />
      <Timeline />
      <InterestTags />
    </section>
  );
}
