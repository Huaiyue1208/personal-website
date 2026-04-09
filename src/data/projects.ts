export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "pulse-shaper",
    title: "High-Resolution Pulse Shaper",
    description:
      "Designed and built an optical pulse shaper using immersion grating and SLM for ultrafast laser pulse control.",
    longDescription:
      "Developed a high-resolution spectral pulse shaper combining an immersion grating (75% efficiency) with a spatial light modulator (SLM). The system enables precise control of ultrafast laser pulses through spectral phase and amplitude modulation.",
    image: "/images/projects/pulse-shaper.jpg",
    tags: ["Ultrafast Optics", "SLM", "Pulse Shaping"],
    links: [],
  },
  {
    id: "opa",
    title: "Optical Parametric Amplification",
    description:
      "Research on broadband OPA systems for generating tunable ultrashort pulses across the infrared spectrum.",
    longDescription:
      "Investigating optical parametric amplification (OPA) techniques to generate broadly tunable femtosecond pulses. Focus on phase matching, pump-signal temporal overlap optimization, and conversion efficiency enhancement.",
    image: "/images/projects/opa.jpg",
    tags: ["Nonlinear Optics", "OPA", "Femtosecond"],
    links: [],
  },
  {
    id: "frog",
    title: "FROG Pulse Characterization",
    description:
      "Implemented frequency-resolved optical gating for complete characterization of ultrashort laser pulses.",
    longDescription:
      "Built and calibrated a FROG (Frequency-Resolved Optical Gating) system for measuring the temporal profile and phase of femtosecond pulses. Developed retrieval algorithms for extracting pulse information from spectrograms.",
    image: "/images/projects/frog.jpg",
    tags: ["Pulse Measurement", "FROG", "Spectroscopy"],
    links: [],
  },
  {
    id: "nonlinear-sim",
    title: "Nonlinear Optics Simulations",
    description:
      "Computational modeling of nonlinear optical processes including SHG, THG, and four-wave mixing.",
    longDescription:
      "Developed simulation tools in Python and MATLAB for modeling nonlinear optical interactions. Includes split-step Fourier methods for pulse propagation, phase matching calculations, and parametric process optimization.",
    image: "/images/projects/simulation.jpg",
    tags: ["Simulation", "Python", "MATLAB"],
    links: [],
  },
];
