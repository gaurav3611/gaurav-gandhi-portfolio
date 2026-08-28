"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";
import { stats, education, skillGroups } from "@/data/portfolio";

export default function About() {
  const techLogos = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));

  return (
    <section
      id="about"
      data-section="about"
      className="relative py-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading eyebrow="About" title="Who I Am" description="A quick introduction & my journey so far." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur border border-white/60 rounded-2xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow"
          >
            <h3 className="font-display font-semibold text-ink mb-4 text-xl">
              Profile
            </h3>
            <p className="text-charcoal leading-relaxed mb-6 font-serif">
              I am a Full Stack Developer currently pursuing my M.Tech in Computer
              Science at VIT. I enjoy designing and building robust systems — from
              backend services to clean, responsive interfaces — and I care deeply
              about writing thoughtful, maintainable code.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-line rounded-xl p-5 text-center bg-elevated"
                >
                  <div className="text-3xl md:text-4xl font-display font-semibold text-ink">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-2 font-mono text-xs text-charcoal">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/90 backdrop-blur border border-white/60 rounded-2xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow"
          >
            <h3 className="font-display font-semibold text-ink mb-4 text-xl">
              Education
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col bg-white border border-line rounded-xl p-5 hover:border-vermilion/60 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-vermilion/10 flex items-center justify-center mb-4 group-hover:bg-vermilion/20 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10L12 5 2 10l10 5 10-5z" />
                      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                    </svg>
                  </div>
                  <div className="text-ink font-medium leading-snug">{edu.degree}</div>
                  <div className="text-sm text-charcoal mt-1">{edu.school}</div>
                  <div className="text-xs text-stone font-mono mt-1">{edu.year}</div>
                  <div className="text-sm text-vermilion font-mono mt-2 font-medium">
                    {edu.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur border border-white/60 rounded-2xl p-8 shadow-xl shadow-black/5"
        >
          <h4 className="font-mono text-xs uppercase tracking-widest text-stone mb-6">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {techLogos.map((t) => (
              <TechIcon key={t} name={t} size={30} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
