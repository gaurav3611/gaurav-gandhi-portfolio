"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section
      id="achievements"
      data-section="achievements"
      className="relative py-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Highlights"
          title="Milestones & Recognition"
          description="Moments of impact along the way."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-white/60 p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-vermilion/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:bg-vermilion/20 transition-all">
                {a.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2 leading-tight">
                {a.title}
              </h3>
              <p className="text-base text-charcoal leading-relaxed font-serif">
                {a.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
