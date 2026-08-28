"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"black" | "slash" | "tear" | "reveal">(
    "black"
  );
  const [done, setDone] = useState(false);
  const [bamboo, setBamboo] = useState<
    {
      id: number;
      left: number;
      top: number;
      size: number;
      tx: number;
      ty: number;
      rot: number;
    }[]
  >([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(
      setTimeout(() => setPhase("slash"), 1500),
      setTimeout(() => setPhase("tear"), 2400),
      setTimeout(() => setPhase("reveal"), 3200),
      setTimeout(() => {
        setDone(true);
        onComplete();
      }, 3900)
    );

    timers.push(
      setTimeout(() => {
        const arr = Array.from({ length: 36 }, (_, i) => {
          const angle = -45 + Math.random() * 90;
          const rad = (angle * Math.PI) / 180;
          const distance = 260 + Math.random() * 420;
          return {
            id: i,
            left: 50,
            top: 50,
            size: Math.random() * 30 + 18,
            tx: Math.cos(rad) * distance * (0.5 + Math.random() * 0.5),
            ty: Math.sin(rad) * distance * (0.5 + Math.random() * 0.5),
            rot: (Math.random() - 0.5) * 720,
          };
        });
        setBamboo(arr);
      }, 1500)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Center kanji stack — pure Japanese */}
          <motion.div
            className="relative z-20 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* 侍 */}
            <motion.div
              className="text-[180px] sm:text-[240px] lg:text-[300px] font-display text-white/20 select-none leading-none"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              侍
            </motion.div>

            {/* 魂 */}
            <motion.div
              className="text-3xl sm:text-4xl lg:text-5xl font-display text-white/30 mt-2"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                letterSpacing: ["0.6em", "1em", "0.6em"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              魂
            </motion.div>

            {/* 一刀両断 */}
            <motion.div
              className="text-xs sm:text-sm lg:text-base text-white/20 font-display mt-8 tracking-[0.5em] [writing-mode:vertical-rl] [text-orientation:upright]"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              一刀両断
            </motion.div>
          </motion.div>

          {/* Corner diamonds */}
          <div className="absolute top-8 left-8 text-white/10 text-3xl font-display select-none">◆</div>
          <div className="absolute top-8 right-8 text-white/10 text-3xl font-display select-none">◆</div>
          <div className="absolute bottom-8 left-8 text-white/10 text-3xl font-display select-none">◆</div>
          <div className="absolute bottom-8 right-8 text-white/10 text-3xl font-display select-none">◆</div>

          {/* Katana slash */}
          {(phase === "slash" || phase === "tear" || phase === "reveal") && (
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[200%] bg-gradient-to-b from-transparent via-vermilion to-transparent pointer-events-none z-[30]"
              style={{
                boxShadow:
                  "0 0 40px #c41e3a, 0 0 80px #8b1a2b, 0 0 150px #5a1120",
                opacity: phase === "slash" ? 1 : 0,
                transform:
                  phase === "slash"
                    ? "translateX(-50%) rotate(45deg) scale(1)"
                    : "translateX(-50%) rotate(45deg) scale(0.3)",
                transition: "all 0.8s cubic-bezier(0.77, 0, 0.18, 1)",
              }}
            />
          )}

          {/* Bamboo shards cut by the katana */}
          <div className="absolute inset-0 pointer-events-none z-[40]">
            {bamboo.map((p) => (
              <span
                key={p.id}
                className="bamboo-shard"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size}px`,
                  height: `${p.size * (0.5 + Math.random() * 0.5)}px`,
                  animationDuration: `${1 + Math.random() * 0.8}s`,
                  animationDelay: `${(Math.random() * 0.3).toFixed(2)}s`,
                  ["--tx" as string]: `${p.tx}px`,
                  ["--ty" as string]: `${p.ty}px`,
                  ["--rot" as string]: `${p.rot}deg`,
                }}
              />
            ))}
          </div>

          {/* Loading indicator — Japanese only */}
          <div className="absolute bottom-[12%] z-[30] flex flex-col items-center gap-5">
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-vermilion rounded-full"
                  animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
            <motion.div
              className="text-xs text-white/30 font-display tracking-[0.5em]"
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              待機中
            </motion.div>
          </div>

          {/* Screen tear halves */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-[#0a0a0a] z-[25] ${
              phase === "tear" || phase === "reveal" ? "slide-out-left" : ""
            }`}
          >
            <div className="absolute right-[-20px] top-0 h-full w-20 bg-gradient-to-r from-vermilion/30 to-transparent blur-xl" />
          </div>
          <div
            className={`absolute top-0 right-0 w-1/2 h-full bg-[#0a0a0a] z-[25] ${
              phase === "tear" || phase === "reveal" ? "slide-out-right" : ""
            }`}
          >
            <div className="absolute left-[-20px] top-0 h-full w-20 bg-gradient-to-l from-vermilion/30 to-transparent blur-xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
