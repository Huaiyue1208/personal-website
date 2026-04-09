"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const count = typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 800;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#FF6B9D"),
      new THREE.Color("#C084FC"),
      new THREE.Color("#22D3EE"),
      new THREE.Color("#FB923C"),
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;

    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * viewport.width * 0.5 - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y * viewport.height * 0.5 - mouseRef.current.y) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WireframeShape() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={ref} position={[2.5, 0.5, -2]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshBasicMaterial color="#C084FC" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function TorusShape() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.z = state.clock.elapsedTime * 0.08;
  });

  return (
    <mesh ref={ref} position={[-2.5, -1, -3]}>
      <torusKnotGeometry args={[0.8, 0.25, 64, 16]} />
      <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

export function ParticleScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 1.5]}
      className="!absolute inset-0"
    >
      <Particles />
      <WireframeShape />
      <TorusShape />
    </Canvas>
  );
}
