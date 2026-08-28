"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { socials } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const activeSection = usePortfolioStore((s) => s.activeSection);
  const menuOpen = usePortfolioStore((s) => s.menuOpen);
  const setMenuOpen = usePortfolioStore((s) => s.setMenuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string, isMobile = false) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (isMobile) setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 shadow-sm ${
          scrolled ? "glass-strong py-3" : "py-5 bg-washi/60 backdrop-blur"
        }`}
      >
        <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <span className="w-9 h-9 rounded-full bg-vermilion text-white flex items-center justify-center font-display font-semibold text-sm group-hover:opacity-85 transition-opacity duration-300">
              GG
            </span>
            <span className="hidden sm:inline-block font-display text-ink text-lg tracking-wide">
              GG
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.href)}
                className={`relative px-3 py-2 text-sm transition-colors duration-300 font-body ${
                  activeSection === item.id
                    ? "text-vermilion"
                    : "text-charcoal hover:text-ink"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-vermilion rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="hidden md:inline-flex px-4 py-2 bg-vermilion text-white rounded-lg text-sm font-medium hover:bg-vermilion-dark transition-colors"
          >
            Contact
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[75]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[72] bg-washi/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-2"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => scrollTo(item.href, true)}
                className={`flex items-center gap-3 font-display text-2xl py-2 transition-colors ${
                  activeSection === item.id
                    ? "text-vermilion"
                    : "text-charcoal hover:text-ink"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-6 mt-8"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal hover:text-vermilion transition-colors font-mono text-sm"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
