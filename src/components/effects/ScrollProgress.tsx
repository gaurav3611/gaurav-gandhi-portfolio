"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function ScrollProgress() {
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[80] bg-transparent pointer-events-none">
      <div
        className="h-full bg-vermilion transition-transform duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}
