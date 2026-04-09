"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const links = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-gradient"
        >
          {siteConfig.name}
        </a>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-white/70 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
