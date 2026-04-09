"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ResearchSection() {
  return (
    <section id="research" className="relative py-28 px-6 max-w-5xl mx-auto overflow-hidden">
      <GradientBlob color1="#FB923C" color2="#FF6B9D" size={450} className="-top-20 -left-40" />
      <SectionHeading>Research &amp; Projects</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
