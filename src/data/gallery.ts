export interface GalleryPhoto {
  src: string;
  alt: string;
  location: string;
  date: string; // "YYYY-MM" format
}

export interface Trip {
  id: string;
  title: string;
  location: string;
  date: string; // "YYYY-MM"
  photos: GalleryPhoto[];
}

export const trips: Trip[] = [
  {
    id: "newhaven-2025",
    title: "New Haven, USA",
    location: "New Haven",
    date: "2025-06",
    photos: [
      { src: "/images/gallery/2025-2026_NewHaven/6L1A7651.JPG", alt: "New Haven 1", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A7653.JPG", alt: "New Haven 2", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A7700.JPG", alt: "New Haven 3", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A8859.JPG", alt: "New Haven 4", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A8900.JPG", alt: "New Haven 5", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A9206.JPG", alt: "New Haven 6", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A9212.JPG", alt: "New Haven 7", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A9220.JPG", alt: "New Haven 8", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A9233.JPG", alt: "New Haven 9", location: "New Haven", date: "2025-06" },
      { src: "/images/gallery/2025-2026_NewHaven/6L1A9237.JPG", alt: "New Haven 10", location: "New Haven", date: "2025-06" },
    ],
  },
  {
    id: "boston-2026",
    title: "Boston, USA",
    location: "Boston",
    date: "2026-03",
    photos: [
      { src: "/images/gallery/20260308_Boston/16A772B6-9575-4354-B536-EBD2746DB48B_1_105_c.jpeg", alt: "Boston 1", location: "Boston", date: "2026-03" },
      { src: "/images/gallery/20260308_Boston/16E92319-F04C-49B9-AE02-B37F1AB72536_1_105_c.jpeg", alt: "Boston 2", location: "Boston", date: "2026-03" },
      { src: "/images/gallery/20260308_Boston/8A1D756F-0EA5-4B35-9285-1AC5DF46A513_1_105_c.jpeg", alt: "Boston 3", location: "Boston", date: "2026-03" },
      { src: "/images/gallery/20260308_Boston/9B9AF837-C6CE-436D-BF67-882EC152B5E3_1_105_c.jpeg", alt: "Boston 4", location: "Boston", date: "2026-03" },
      { src: "/images/gallery/20260308_Boston/AC383B37-D5F5-4D23-BD14-370883FA7958_1_105_c.jpeg", alt: "Boston 5", location: "Boston", date: "2026-03" },
      { src: "/images/gallery/20260308_Boston/C2E8AE93-539C-4C8E-A7F4-244737C5F027_1_105_c.jpeg", alt: "Boston 6", location: "Boston", date: "2026-03" },
    ],
  },
  {
    id: "tokyo-2025",
    title: "Tokyo, Japan",
    location: "Tokyo",
    date: "2025-03",
    photos: [
      { src: "/images/gallery/tokyo-1.jpg", alt: "Tokyo tower", location: "Tokyo", date: "2025-03" },
      { src: "/images/gallery/tokyo-2.jpg", alt: "Shibuya crossing", location: "Tokyo", date: "2025-03" },
      { src: "/images/gallery/tokyo-3.jpg", alt: "Meiji shrine", location: "Tokyo", date: "2025-03" },
    ],
  },
  {
    id: "kyoto-2025",
    title: "Kyoto, Japan",
    location: "Kyoto",
    date: "2025-03",
    photos: [
      { src: "/images/gallery/kyoto-1.jpg", alt: "Fushimi Inari", location: "Kyoto", date: "2025-03" },
      { src: "/images/gallery/kyoto-2.jpg", alt: "Bamboo grove", location: "Kyoto", date: "2025-03" },
    ],
  },
  {
    id: "paris-2023",
    title: "Paris, France",
    location: "Paris",
    date: "2023-12",
    photos: [
      { src: "/images/gallery/202312_Paris/053894b730544567f880b3a966df3f22.jpg", alt: "Paris 1", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/396b72c95abe4c3f6450881b50288639.jpg", alt: "Paris 2", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/4351300102944eec428b87adb24db952.jpg", alt: "Paris 3", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/49aa49f683bf0726cdfd240970a7cb59.jpg", alt: "Paris 4", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/4e88da980152a598ff32331151be614f.jpg", alt: "Paris 5", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/6800da3a3d7b02890bc5a0aef6d01a74.jpg", alt: "Paris 6", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/82a3564da70a555015a49e839b841f24.jpg", alt: "Paris 7", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/92f28b96a3ffe17179d9699a9893ed20.jpg", alt: "Paris 8", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/c37e68451df20be7f95b261a42b818d6.jpg", alt: "Paris 9", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/c89dc1fa98168106d2357775f4bfd0aa.jpg", alt: "Paris 10", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/d5b7a3d53558dd66aca2a64b330da359.jpg", alt: "Paris 11", location: "Paris", date: "2023-12" },
      { src: "/images/gallery/202312_Paris/f5496690aa198d5c7088a011a910ccd5.jpg", alt: "Paris 12", location: "Paris", date: "2023-12" },
    ],
  },
  {
    id: "hongkong-2024",
    title: "Hong Kong",
    location: "Hong Kong",
    date: "2024-12",
    photos: [
      { src: "/images/gallery/hk-1.jpg", alt: "Victoria Peak", location: "Hong Kong", date: "2024-12" },
      { src: "/images/gallery/hk-2.jpg", alt: "Star Ferry", location: "Hong Kong", date: "2024-12" },
      { src: "/images/gallery/hk-3.jpg", alt: "Temple Street", location: "Hong Kong", date: "2024-12" },
    ],
  },
];
