"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      data-section="experience"
      className="relative py-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="A look at my professional journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white/90 backdrop-blur border border-white/60 rounded-2xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-vermilion to-vermilion-dark flex items-center justify-center text-white font-display font-semibold text-xl shadow-md">
                  {exp.company.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-ink">{exp.company}</h3>
                  <p className="text-charcoal font-medium text-base">{exp.role}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-sm text-stone font-mono">{exp.duration}</span>
                    <span className="w-1 h-1 bg-vermilion rounded-full" />
                    <span className="text-sm text-vermilion font-mono font-medium">
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-4 flex-1">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-charcoal text-[15px] flex items-start gap-2.5">
                    <span className="text-vermilion mt-1 flex-shrink-0">•</span>
                    <span className="font-serif leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 border-t border-line pt-4 mt-auto">
                {exp.tech.map((t) => (
                  <TechIcon key={t} name={t} size={28} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
