"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import { hero } from "@/data/portfolio";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-section="hero"
      id="hero"
      className="relative min-h-screen flex items-center"
    >
      <div className="max-w-screen-2xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-28 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
              Full Stack Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item} className="mt-8">
            <h1 className="text-white font-display font-bold tracking-tight leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
              Gaurav Nitesh
            </h1>
            <h1 className="text-white font-display font-bold tracking-tight leading-[1.05] text-5xl sm:text-6xl lg:text-7xl mt-1">
              Gandhi
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={item} className="mt-6">
            <h2 className="text-white/85 text-xl sm:text-2xl font-light">
              M.Tech Computer Science @ VIT — building robust, elegant systems.
            </h2>
            <p className="mt-4 text-white/75 text-lg max-w-xl leading-relaxed font-serif">
              {hero.description}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Magnetic strength={0.2}>
              <button
                onClick={() => scrollTo("#projects")}
                className="px-7 py-3.5 rounded-xl bg-vermilion text-white font-display font-medium text-sm hover:bg-vermilion-dark transition-colors shadow-lg shadow-black/20"
              >
                View My Work
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3.5 rounded-xl border border-white/30 text-white font-display font-medium text-sm hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <span className="w-px h-10 relative overflow-hidden bg-white/30">
          <motion.span
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-px h-4 bg-vermilion"
          />
        </span>
      </motion.button>
    </section>
  );
}
