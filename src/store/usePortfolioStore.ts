import { create } from "zustand";

type CursorType =
  | "default"
  | "hover"
  | "text"
  | "view"
  | "drag"
  | "link"
  | "none";

interface PortfolioState {
  loading: boolean;
  setLoading: (loading: boolean) => void;

  activeSection: string;
  setActiveSection: (section: string) => void;

  scrollProgress: number;
  setScrollProgress: (progress: number) => void;

  mousePosition: { x: number; y: number };
  setMousePosition: (x: number, y: number) => void;

  isMobile: boolean;
  setIsMobile: (mobile: boolean) => void;

  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;

  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;

  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),

  activeSection: "hero",
  setActiveSection: (activeSection) => set({ activeSection }),

  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),

  mousePosition: { x: 0, y: 0 },
  setMousePosition: (x, y) => set({ mousePosition: { x, y } }),

  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),

  cursorType: "default",
  setCursorType: (cursorType) => set({ cursorType }),

  menuOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),

  reducedMotion: false,
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
}));
