"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trips, type GalleryPhoto } from "@/data/gallery";

type FilterMode = "all" | "location" | "date";

function formatDate(d: string) {
  const [y, m] = d.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export function GallerySection() {
  const [filter, setFilter] = useState<FilterMode>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selected, setSelected] = useState<{ tripIdx: number; photoIdx: number } | null>(null);

  // Unique locations and dates for filter chips
  const locations = useMemo(() => [...new Set(trips.map((t) => t.location))], []);
  const dates = useMemo(() => [...new Set(trips.map((t) => t.date))].sort().reverse(), []);

  // Filter trips
  const filtered = useMemo(() => {
    if (filter === "all" || !activeTag) return trips;
    if (filter === "location") return trips.filter((t) => t.location === activeTag);
    return trips.filter((t) => t.date === activeTag);
  }, [filter, activeTag]);

  // Flatten for lightbox navigation
  const allPhotos = useMemo(() => {
    const arr: { photo: GalleryPhoto; tripIdx: number; photoIdx: number }[] = [];
    filtered.forEach((trip, ti) => {
      trip.photos.forEach((photo, pi) => {
        arr.push({ photo, tripIdx: ti, photoIdx: pi });
      });
    });
    return arr;
  }, [filtered]);

  const selectedFlat = selected
    ? allPhotos.findIndex((p) => p.tripIdx === selected.tripIdx && p.photoIdx === selected.photoIdx)
    : -1;

  const navigateLightbox = (dir: 1 | -1) => {
    if (selectedFlat < 0) return;
    const next = (selectedFlat + dir + allPhotos.length) % allPhotos.length;
    const item = allPhotos[next];
    setSelected({ tripIdx: item.tripIdx, photoIdx: item.photoIdx });
  };

  return (
    <section id="gallery" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      <GradientBlob color1="#22D3EE" color2="#FB923C" size={450} className="-top-20 -right-40" />
      <SectionHeading>Travel Gallery</SectionHeading>

      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {/* Mode buttons */}
        {(["all", "location", "date"] as FilterMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => { setFilter(mode); setActiveTag(null); }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === mode
                ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white"
                : "bg-white/5 text-white/50 hover:text-white border border-white/10"
            }`}
          >
            {mode === "all" ? "All" : mode === "location" ? "By Location" : "By Date"}
          </button>
        ))}
      </div>

      {/* Sub-filter chips */}
      <AnimatePresence>
        {filter !== "all" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap justify-center gap-2 mb-8 overflow-hidden"
          >
            {(filter === "location" ? locations : dates).map((tag) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeTag === tag
                    ? "bg-brand-cyan text-black"
                    : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                }`}
              >
                {filter === "date" ? formatDate(tag) : tag}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trip groups */}
      {filtered.map((trip, ti) => (
        <div key={trip.id} className="mb-12">
          <ScrollReveal>
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                {trip.title}
              </h3>
              <span className="text-white/40 text-sm">{formatDate(trip.date)}</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {trip.photos.map((photo, pi) => (
              <ScrollReveal key={pi} variant="scaleIn" delay={pi * 0.06}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  onClick={() => setSelected({ tripIdx: ti, photoIdx: pi })}
                  className="relative rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 group aspect-[4/3]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 flex items-center justify-center text-3xl">
                  </div>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 288px"
                    className="object-cover z-10"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="hidden">
                    📸
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium">{photo.location}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      ))}

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-center text-white/40 py-12">No trips match this filter.</p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && selectedFlat >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-brand-dark border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[3/2]">
                <div className="absolute inset-0 bg-brand-dark flex items-center justify-center text-6xl">
                  📸
                </div>
                <Image
                  src={allPhotos[selectedFlat].photo.src}
                  alt={allPhotos[selectedFlat].photo.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 896px"
                  className="object-contain z-10"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="hidden">
                  📸
                </div>
              </div>

              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-white font-medium">
                    {allPhotos[selectedFlat].photo.location}
                  </p>
                  <p className="text-white/40 text-sm">
                    {formatDate(allPhotos[selectedFlat].photo.date)}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Close &times;
                </button>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-xl"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-xl"
              >
                &#8250;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
