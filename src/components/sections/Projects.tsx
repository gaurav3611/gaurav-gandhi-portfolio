"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";
import { projects, projectCategories } from "@/data/portfolio";

const categoryEmoji: Record<string, string> = {
  "Full Stack": "🛠️",
  IoT: "📡",
  Distributed: "🌐",
  ML: "🧠",
};

const categoryGradient: Record<string, string> = {
  "Full Stack": "from-vermilion/20 via-vermilion/5 to-transparent",
  IoT: "from-bamboo/25 via-bamboo/5 to-transparent",
  Distributed: "from-indigo/25 via-indigo/5 to-transparent",
  ML: "from-gold/30 via-gold/10 to-transparent",
};

export default function Projects() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <section
      id="projects"
      data-section="projects"
      className="relative py-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Projects"
            title="Recent Work"
            description="Selected projects I've designed and built."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors duration-300 ${
                  category === cat
                    ? "bg-vermilion text-white font-medium"
                    : "border border-white/70 bg-white/70 text-charcoal hover:text-vermilion hover:border-vermilion/50 backdrop-blur"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/60"
              >
                {/* Preview / cover */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${categoryGradient[project.category]} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl drop-shadow-sm transition-transform duration-500 group-hover:scale-125">
                      {categoryEmoji[project.category]}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider bg-black/50 text-white px-2 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-ink mb-2 leading-snug line-clamp-2 min-h-[2.5rem]">
                    {project.title}
                  </h3>
                  <p className="text-charcoal text-sm mb-4 leading-relaxed line-clamp-2 flex-1 font-serif">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <TechIcon key={t} name={t} size={24} />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-5 pt-4 border-t border-line">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-charcoal hover:text-vermilion transition-colors inline-flex items-center gap-1.5"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-charcoal hover:text-vermilion transition-colors inline-flex items-center gap-1.5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
