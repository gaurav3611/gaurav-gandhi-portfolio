"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function HeroSculpture() {
  const knot = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const { x, y } = state.pointer;
    target.current.x += (x * 0.08 - target.current.x) * 0.05;
    target.current.y += (y * 0.08 - target.current.y) * 0.05;

    const time = state.clock.elapsedTime;

    if (knot.current) {
      knot.current.rotation.x += 0.0015;
      knot.current.rotation.y += 0.0025;
      knot.current.rotation.x += (target.current.y - knot.current.rotation.x) * 0.03;
      knot.current.rotation.y += (target.current.x - knot.current.rotation.y) * 0.03;
      knot.current.position.y = Math.sin(time * 0.5) * 0.1;
    }

    if (shell.current) {
      shell.current.rotation.y = time * 0.05;
      shell.current.rotation.z = time * 0.02;
    }
  });

  return (
    <group>
      <mesh ref={knot}>
        <torusKnotGeometry args={[1.4, 0.42, 160, 24]} />
        <meshPhysicalMaterial color="#c41e3a" metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color="#1a2a3a" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

export default function Background3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff7ef" />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#c9a84c" />
      <HeroSculpture />
    </Canvas>
  );
}
