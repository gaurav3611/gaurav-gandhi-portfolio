"use client";

import { SocialIcon } from "@/components/icons";
import { socialsFull } from "@/data/contact";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/15 bg-black/40 backdrop-blur-md text-white py-12">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/25" />
          <span className="text-vermilion text-xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/25" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Back to top"
          >
            <span className="w-10 h-10 rounded-full bg-vermilion text-white flex items-center justify-center font-display font-semibold text-sm group-hover:opacity-85 transition-opacity duration-300">
              GG
            </span>
            <span className="font-mono text-sm text-white/80">
              Back to top ↑
            </span>
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialsFull.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="w-11 h-11 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:bg-vermilion hover:border-vermilion hover:text-white transition-all duration-300"
              >
                <SocialIcon name={s.icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 text-center">
          <p className="text-xs font-mono text-white/60">
            © {new Date().getFullYear()} Gaurav Nitesh Gandhi · Crafted with care in Vellore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
