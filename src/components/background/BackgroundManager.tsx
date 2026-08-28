"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { templeBackgrounds, templeFallbacks } from "@/data/temples";

export default function BackgroundManager() {
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress);
  const loading = usePortfolioStore((s) => s.loading);

  const current = useMemo(() => {
    const index = Math.min(
      Math.floor(scrollProgress * templeBackgrounds.length),
      templeBackgrounds.length - 1
    );
    return templeBackgrounds[index];
  }, [scrollProgress]);

  const next = templeBackgrounds[(current.id + 1) % templeBackgrounds.length];

  return (
    <>
      {/* Fixed temple background layer */}
      <div className="fixed inset-0 z-0" aria-hidden>
          {templeBackgrounds.map((t, i) => {
          const isActive = t.id === current.id;
          const isNext = t.id === next.id;
          const show = isActive || (isNext && scrollProgress > 0);
          if (!show) return null;
          return (
            <motion.div
              key={t.id}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            >
              <img
                src={t.url}
                alt={t.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: "scale(1.06)" }}
                fetchPriority={t.id === current.id ? "high" : "auto"}
                loading={t.id === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  const fallback =
                    templeFallbacks[i % templeFallbacks.length];
                  if (e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback;
                  }
                }}
              />
            </motion.div>
          );
        })}

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

        {/* Active temple name */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-10 left-6 sm:left-10 text-white/50 pointer-events-none"
          >
            <div className="text-xs sm:text-sm tracking-[0.35em] uppercase">
              {current.name}
            </div>
            <div className="text-[10px] sm:text-xs text-white/30 -mt-0.5 font-serif italic">
              {current.label}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical scroll progress rail */}
      {!loading && (
        <div
          className="fixed right-5 top-1/2 -translate-y-1/2 z-[60] hidden sm:flex flex-col items-center gap-2"
          aria-hidden
        >
          {templeBackgrounds.map((t, i) => {
            const active = i <= current.id;
            return (
              <div
                key={t.id}
                className="w-[3px] rounded-full transition-all duration-300"
                style={{
                  height: active ? 22 : 10,
                  background: active ? "#c41e3a" : "rgba(255,255,255,0.35)",
                }}
              />
            );
          })}
        </div>
      )}

      {/* Body background fallback (visible while loading, matches theme) */}
      <div
        className="fixed inset-0 -z-10"
        style={{ background: "#f5f0eb" }}
        aria-hidden
      />
    </>
  );
}
