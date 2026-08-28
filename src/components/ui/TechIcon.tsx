"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TechIconProps {
  name: string;
  size?: number;
  showLabel?: boolean;
  variant?: "default" | "tile";
  color?: string;
}

const SLUGS: Record<string, string> = {
  Java: "java",
  TypeScript: "typescript",
  JavaScript: "javascript",
  Python: "python",
  SQL: "mysql",
  Kotlin: "kotlin",
  HTML: "html5",
  CSS: "css3",
  React: "react",
  "Node.js": "nodedotjs",
  Express: "express",
  "Spring Boot": "spring",
  Flask: "flask",
  JDBC: "java",
  MySQL: "mysql",
  MongoDB: "mongodb",
  Firebase: "firebase",
  Hadoop: "apachehadoop",
  ZooKeeper: "apachezookeeper",
  "Apache Ignite": "apacheignite",
  ESP32: "espressif",
  MPU6050: "raspberrypi",
  BLE: "bluetooth",
  Blynk: "blynk",
  "scikit-learn": "scikitlearn",
  "Scikit-learn": "scikitlearn",
  TensorFlow: "tensorflow",
  Keras: "keras",
  Pandas: "pandas",
  NumPy: "numpy",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  Vercel: "vercel",
  Docker: "docker",
  AWS: "amazonwebservices",
  Three: "threedotjs",
  IPFS: "ipfs",
};

const COLORS: Record<string, string> = {
  Java: "#f89820",
  TypeScript: "#3178C6",
  JavaScript: "#f0db4f",
  Python: "#3776AB",
  SQL: "#e38c00",
  Kotlin: "#7F52FF",
  HTML: "#E34F26",
  CSS: "#1572B6",
  React: "#61DAFB",
  "Node.js": "#339933",
  Express: "#666666",
  "Spring Boot": "#6DB33F",
  Flask: "#000000",
  JDBC: "#2563eb",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Hadoop: "#66CCFF",
  ZooKeeper: "#F5925A",
  "Apache Ignite": "#F58220",
  ESP32: "#E7352C",
  MPU6050: "#33A3DE",
  BLE: "#0082FC",
  Blynk: "#00BED6",
  "scikit-learn": "#F7931E",
  "Scikit-learn": "#F7931E",
  TensorFlow: "#FF6F00",
  Keras: "#D00000",
  Pandas: "#150458",
  NumPy: "#013243",
  Git: "#F05032",
  GitHub: "#181717",
  Postman: "#FF6C37",
  Vercel: "#000000",
  Docker: "#2496ED",
  AWS: "#FF9900",
  Three: "#000000",
  IPFS: "#65C2CB",
};

function getSlug(name: string): string | undefined {
  return SLUGS[name];
}

function getColor(name: string, variant: "default" | "tile"): string {
  const brand = COLORS[name];
  if (variant === "tile") return brand ?? "#666666";
  return brand ?? "#666666";
}

export default function TechIcon({
  name,
  size = 36,
  showLabel = false,
  variant = "default",
  color,
}: TechIconProps) {
  const slug = getSlug(name);
  const brandColor = color ?? getColor(name, variant);
  const [failed, setFailed] = useState(false);

  const logo = slug && !failed ? (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      className="object-contain"
      onError={() => setFailed(true)}
    />
  ) : (
    <span
      style={{
        width: size,
        height: size,
        fontSize: size * 0.6,
        lineHeight: `${size}px`,
        color: brandColor,
        fontWeight: 700,
        display: "inline-block",
        textAlign: "center",
      }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );

  if (variant === "tile") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-line bg-card hover:bg-elevated hover:border-vermilion/50 transition-all duration-300"
      >
        <div className="grid place-items-center" style={{ width: size, height: size }}>
          {logo}
        </div>
        <span className="text-xs font-mono text-stone group-hover:text-ink transition-colors duration-300">
          {name}
        </span>
      </motion.div>
    );
  }

  return (
    <div
      className="group flex items-center gap-2 rounded-lg bg-card border border-line hover:bg-elevated hover:border-vermilion/50 px-2.5 py-1.5 transition-all duration-300"
      title={name}
      aria-label={name}
    >
      <div className="grid place-items-center" style={{ width: size, height: size }}>
        {logo}
      </div>
      {(showLabel || true) && (
        <span className="text-sm font-mono text-charcoal group-hover:text-ink transition-colors duration-300">
          {name}
        </span>
      )}
    </div>
  );
}
