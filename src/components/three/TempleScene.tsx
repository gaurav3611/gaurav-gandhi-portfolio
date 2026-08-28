"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Mountains() {
  const mountains = useMemo(() => {
    const data = [
      { x: -25, y: 12, z: -30, r: 15, h: 25, color: "#3a3228" },
      { x: 20, y: 10, z: -35, r: 12, h: 20, color: "#4a3a2e" },
      { x: -5, y: 7.5, z: -40, r: 8, h: 15, color: "#3a3228" },
      { x: 0, y: 15, z: -52, r: 20, h: 30, color: "#2a2218" },
    ];
    return data;
  }, []);

  return (
    <group>
      {mountains.map((m, i) => (
        <mesh key={i} position={[m.x, m.y, m.z]} castShadow>
          <coneGeometry args={[m.r, m.h, 8]} />
          <meshStandardMaterial
            color={m.color}
            roughness={0.9}
            metalness={0}
            flatShading
            transparent={i === 3}
            opacity={i === 3 ? 0.6 : 1}
          />
        </mesh>
      ))}
    </group>
  );
}

function ToriiGate() {
  const woodMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#8a2a1a", roughness: 0.7, metalness: 0.1 }),
    []
  );

  return (
    <group position={[0, 0, -8]}>
      <mesh position={[-2.5, 2, 0]} material={woodMat} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 4, 8]} />
      </mesh>
      <mesh position={[2.5, 2, 0]} material={woodMat} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 4, 8]} />
      </mesh>
      <mesh position={[0, 4, 0]} material={woodMat} castShadow>
        <boxGeometry args={[6, 0.4, 0.6]} />
      </mesh>
      <mesh position={[0, 3.2, 0]} material={woodMat} castShadow>
        <boxGeometry args={[5.5, 0.4, 0.5]} />
      </mesh>
    </group>
  );
}

function TempleBuilding() {
  const pillarMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#6a3a2a", roughness: 0.6, metalness: 0.1 }),
    []
  );

  const pillars = [
    [-3.5, 0, -2],
    [3.5, 0, -2],
    [-3.5, 0, 2],
    [3.5, 0, 2],
  ];

  return (
    <group position={[0, 0, 5]}>
      {/* Base platform */}
      <mesh position={[0, 0.25, 0]} receiveShadow>
        <boxGeometry args={[12, 0.5, 8]} />
        <meshStandardMaterial color="#5a4a3a" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 1.75, 0]} castShadow>
        <boxGeometry args={[8, 3, 5]} />
        <meshStandardMaterial color="#8a7a6a" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 3.4, 0]} castShadow>
        <coneGeometry args={[5.4, 1.6, 4]} />
        <meshStandardMaterial color="#4a3a2e" roughness={0.8} metalness={0.2} />
      </mesh>
      <mesh position={[0, 4.4, 0]} castShadow>
        <coneGeometry args={[3.2, 1.2, 4]} />
        <meshStandardMaterial color="#3a2c22" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Pillars */}
      {pillars.map((p, i) => (
        <mesh key={i} position={[p[0], 1.7, p[2]]} material={pillarMat} castShadow>
          <cylinderGeometry args={[0.2, 0.25, 3.4, 8]} />
        </mesh>
      ))}

      {/* Entrance steps */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.08 + i * 0.15, 3.6 + i * 0.5]} receiveShadow>
          <boxGeometry args={[3, 0.15, 0.6 - i * 0.1]} />
          <meshStandardMaterial color="#7a6a5a" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function BambooForest() {
  const bambooMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#4a7a4a", roughness: 0.6, metalness: 0.1 }),
    []
  );

  const stalks = useMemo(() => {
    return Array.from({ length: 70 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 26;
      return {
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        h: 3 + Math.random() * 6,
        s: 0.5 + Math.random() * 0.5,
      };
    });
  }, []);

  return (
    <group>
      {stalks.map((s, i) => (
        <mesh key={i} position={[s.x, s.h / 2, s.z]} material={bambooMat} scale={[s.s, 1, s.s]}>
          <cylinderGeometry args={[0.06, 0.08, s.h, 6]} />
        </mesh>
      ))}
    </group>
  );
}

function Trees() {
  const trees = useMemo(() => {
    const pos = [
      [-8, 2],
      [-10, -3],
      [9, 1],
      [11, -2],
      [-6, 10],
      [7, 11],
      [-12, 6],
      [13, 7],
    ];
    return pos.map(([x, z]) => ({ x, z, s: 0.8 + Math.random() * 0.6 }));
  }, []);

  return (
    <group>
      {trees.map((t, i) => (
        <group key={i} position={[t.x, 0, t.z]} scale={t.s} rotation={[0, Math.random() * Math.PI * 2, 0]}>
          <mesh position={[0, 1.5, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.5, 3, 6]} />
            <meshStandardMaterial color="#5a4a3a" roughness={0.9} />
          </mesh>
          <mesh position={[0, 3.4, 0]} castShadow>
            <sphereGeometry args={[2, 6, 6]} />
            <meshStandardMaterial color="#3a5a3a" roughness={0.8} />
          </mesh>
          <mesh position={[0.5, 4.4, 0.3]} castShadow>
            <sphereGeometry args={[1.4, 6, 6]} />
            <meshStandardMaterial color="#4a6a3a" roughness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 90;
      arr[i * 3 + 1] = Math.random() * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 90 - 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.4;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.08} transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function TempleWorld() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.18;
    }
  });

  return (
    <group ref={group}>
      {/* Ground */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[80, 64]} />
        <meshStandardMaterial color="#2a2218" roughness={0.9} metalness={0} />
      </mesh>

      <Mountains />
      <TempleBuilding />
      <ToriiGate />
      <Trees />
      <BambooForest />
      <FloatingParticles />
    </group>
  );
}

export default function TempleScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [22, 16, 32], fov: 45 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      shadows
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.5} color="#404060" />
      <directionalLight position={[30, 40, 20]} intensity={1.4} castShadow color="#ffeedd" />
      <directionalLight position={[-20, 10, -30]} intensity={0.3} color="#8888ff" />
      <directionalLight position={[-10, 20, -20]} intensity={0.2} color="#ffffff" />
      <TempleWorld />
    </Canvas>
  );
}
