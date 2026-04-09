"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ResearchSection } from "@/components/research/ResearchSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { HobbiesSection } from "@/components/hobbies/HobbiesSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { CursorTrail } from "@/components/ui/CursorTrail";

export default function Home() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <HobbiesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
