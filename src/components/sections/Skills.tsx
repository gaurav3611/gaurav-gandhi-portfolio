"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      data-section="skills"
      className="relative py-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Technologies"
          description="The tools I reach for to build product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="group bg-white/90 backdrop-blur border border-white/60 rounded-2xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg font-bold text-vermilion">✦</span>
                <h3 className="text-lg font-bold text-ink font-display">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechIcon key={skill} name={skill} size={26} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
