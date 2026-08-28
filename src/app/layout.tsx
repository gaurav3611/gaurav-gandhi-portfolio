import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const display = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Nitesh Gandhi | Full Stack Developer",
  description:
    "Portfolio of Gaurav Nitesh Gandhi — a Full Stack Developer and M.Tech CSE student at VIT, building robust, elegant systems.",
  keywords: [
    "Gaurav Gandhi",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "MERN",
    "IoT",
    "Portfolio",
  ],
  authors: [{ name: "Gaurav Nitesh Gandhi" }],
  openGraph: {
    title: "Gaurav Nitesh Gandhi | Portfolio",
    description:
      "Full Stack Developer and M.Tech CSE student at VIT. Building robust, elegant systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Nitesh Gandhi | Portfolio",
    description:
      "Full Stack Developer and M.Tech CSE student at VIT. Building robust, elegant systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${inter.variable} ${mono.variable} antialiased bg-washi text-ink overflow-x-hidden`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
