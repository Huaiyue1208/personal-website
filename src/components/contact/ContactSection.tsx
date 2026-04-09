"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";

const socials = [
  { label: "GitHub", url: siteConfig.socials.github, icon: "GH" },
  { label: "LinkedIn", url: siteConfig.socials.linkedin, icon: "LI" },
  { label: "Scholar", url: siteConfig.socials.googleScholar, icon: "GS" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-6 max-w-3xl mx-auto text-center overflow-hidden">
      <GradientBlob color1="#C084FC" color2="#22D3EE" size={500} className="top-0 left-1/2 -translate-x-1/2" />
      <SectionHeading>Get In Touch</SectionHeading>
      <ScrollReveal>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          Interested in collaboration, have questions about my research, or just
          want to say hi?
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-medium hover:shadow-lg hover:shadow-brand-pink/25 transition-shadow duration-300"
        >
          Say Hello &rarr;
        </a>
      </ScrollReveal>

      <div className="flex justify-center gap-6 mt-12">
        {socials.map((s) => (
          <MagneticButton key={s.label}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors text-sm font-bold"
            >
              {s.icon}
            </a>
          </MagneticButton>
        ))}
      </div>
    </section>
  );
}
