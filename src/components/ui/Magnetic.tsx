"use client";

import { useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate(0px, 0px)");

  const onMouseMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setTransform(
      `translate(${relX * strength}px, ${relY * strength}px)`
    );
  };

  const onMouseLeave = () => setTransform("translate(0px, 0px)");

  return (
    <div
      ref={ref}
      className={`inline-block will-change-transform transition-transform duration-300 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
