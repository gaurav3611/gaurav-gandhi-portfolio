"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`flex items-center gap-3 mb-4 ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="w-1 h-10 bg-vermilion rounded-full" />
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-white/60">
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-[3.4rem] font-display font-semibold text-white tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-4 text-white/80 text-lg ${center ? "mx-auto max-w-2xl" : ""} font-serif leading-relaxed`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
