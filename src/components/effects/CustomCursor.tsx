"use client";

import { useEffect, useRef, useState } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const cursorType = usePortfolioStore((s) => s.cursorType);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => setVisible(false);
    const onDown = () => cursorRef.current?.classList.add("scale-90");
    const onUp = () => cursorRef.current?.classList.remove("scale-90");

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.16;
      ring.current.y += (pos.current.y - ring.current.y) * 0.16;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  const size =
    cursorType === "hover"
      ? "w-16 h-16"
      : cursorType === "link"
      ? "w-14 h-14"
      : cursorType === "text"
      ? "w-8 h-8"
      : "w-9 h-9";

  const ringStyle =
    cursorType === "hover"
      ? "bg-vermilion/10 border-vermilion"
      : cursorType === "link"
      ? "bg-vermilion/20 border-vermilion"
      : cursorType === "text"
      ? "bg-ink/5 border-vermilion/60"
      : "border-vermilion/50";

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[90] pointer-events-none rounded-full border transition-all duration-200 ease-out ${size} ${ringStyle} ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionProperty: "width,height,opacity,border-color,transform" }}
      />
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[91] w-1.5 h-1.5 rounded-full bg-vermilion pointer-events-none ${
          visible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200`}
      />
    </>
  );
}
