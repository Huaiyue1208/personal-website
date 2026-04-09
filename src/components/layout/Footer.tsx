import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="py-8 text-center text-white/40 text-sm border-t border-white/5">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.name}. Built with Next.js
        &amp; Three.js
      </p>
    </footer>
  );
}
