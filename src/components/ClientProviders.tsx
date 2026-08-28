"use client";

import { useEffect, useState } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import CustomCursor from "@/components/effects/CustomCursor";
import LoadingScreen from "@/components/effects/LoadingScreen";
import BackgroundManager from "@/components/background/BackgroundManager";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/effects/ScrollProgress";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const setMousePosition = usePortfolioStore((s) => s.setMousePosition);
  const setScrollProgress = usePortfolioStore((s) => s.setScrollProgress);
  const setActiveSection = usePortfolioStore((s) => s.setActiveSection);
  const setIsMobile = usePortfolioStore((s) => s.setIsMobile);
  const loading = usePortfolioStore((s) => s.loading);
  const setLoading = usePortfolioStore((s) => s.setLoading);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      const sections = document.querySelectorAll("section[data-section]");
      let current = "hero";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = section.getAttribute("data-section") || current;
        }
      });
      setActiveSection(current);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [setMousePosition, setScrollProgress, setActiveSection, setIsMobile]);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <ScrollProgress />
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && <BackgroundManager />}
      <CustomCursor />
      {!loading && <Navbar />}
      <main className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </main>
      {!loading && <Footer />}
    </>
  );
}
