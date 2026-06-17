import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import useIsMobile from "../hooks/useIsMobile";

const COQUETTE = {
  pearl: "#fce7f3",
  ribbon: "#e9d5ff",
  heart: "#d4b8e8",
  lavender: "#e9d5ff",
  cream: "#fffbeb",
  blush: "#f8c8dc",
  rose: "#f4a8c8",
  petalLight: "#fde8f0",
  petalDeep: "#e8b4d4",
};

const FLOWERS_DESKTOP = [
  { position: [-4.8, 3.2, -2.2], scale: 0.52, petal: COQUETTE.pearl, center: COQUETTE.cream, petals: 6, type: "rose" },
  { position: [4.6, 2.8, -1.8], scale: 0.58, petal: COQUETTE.lavender, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [-3.6, 1.2, -1.2], scale: 0.42, petal: COQUETTE.blush, center: COQUETTE.rose, petals: 5, type: "bloom" },
  { position: [3.8, 1.6, -1.5], scale: 0.48, petal: COQUETTE.petalLight, center: COQUETTE.pearl, petals: 6, type: "rose" },
  { position: [-5.2, -0.4, -2], scale: 0.38, petal: COQUETTE.lavender, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [5, -0.8, -1.6], scale: 0.44, petal: COQUETTE.pearl, center: COQUETTE.blush, petals: 5, type: "bloom" },
  { position: [-2.4, 3.6, -2.5], scale: 0.35, petal: COQUETTE.petalDeep, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [2.2, 3.4, -2.3], scale: 0.4, petal: COQUETTE.lavender, center: COQUETTE.pearl, petals: 6, type: "rose" },
  { position: [-4.2, -2.2, -1.8], scale: 0.46, petal: COQUETTE.pearl, center: COQUETTE.rose, petals: 6, type: "rose" },
  { position: [4.4, -2.6, -2.1], scale: 0.5, petal: COQUETTE.blush, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [-1.2, 2.2, -0.8], scale: 0.28, petal: COQUETTE.petalLight, center: COQUETTE.lavender, petals: 5, type: "bloom" },
  { position: [1.4, -1.8, -0.6], scale: 0.3, petal: COQUETTE.lavender, center: COQUETTE.pearl, petals: 5, type: "bloom" },
  { position: [-3, -3.2, -2.4], scale: 0.36, petal: COQUETTE.petalDeep, center: COQUETTE.cream, petals: 6, type: "rose" },
  { position: [3.2, -3.4, -2.2], scale: 0.34, petal: COQUETTE.pearl, center: COQUETTE.blush, petals: 5, type: "bloom" },
  { position: [-5.5, 1.4, -2.8], scale: 0.32, petal: COQUETTE.lavender, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [5.4, 0.6, -2.6], scale: 0.38, petal: COQUETTE.blush, center: COQUETTE.pearl, petals: 6, type: "rose" },
  { position: [0.6, 3.8, -2], scale: 0.26, petal: COQUETTE.pearl, center: COQUETTE.rose, petals: 5, type: "bloom" },
  { position: [-0.8, -3.6, -1.9], scale: 0.24, petal: COQUETTE.petalLight, center: COQUETTE.lavender, petals: 5, type: "bloom" },
];

const FLOWERS_MOBILE = [
  { position: [-3.2, 2.4, -2], scale: 0.4, petal: COQUETTE.pearl, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [3, 2.2, -1.8], scale: 0.42, petal: COQUETTE.lavender, center: COQUETTE.cream, petals: 6, type: "rose" },
  { position: [-2.8, -0.6, -1.5], scale: 0.36, petal: COQUETTE.blush, center: COQUETTE.pearl, petals: 5, type: "bloom" },
  { position: [2.6, -0.4, -1.4], scale: 0.38, petal: COQUETTE.petalLight, center: COQUETTE.rose, petals: 5, type: "bloom" },
  { position: [-1.4, 3.2, -2.2], scale: 0.3, petal: COQUETTE.lavender, center: COQUETTE.cream, petals: 6, type: "rose" },
  { position: [1.6, 3, -2], scale: 0.28, petal: COQUETTE.pearl, center: COQUETTE.blush, petals: 5, type: "bloom" },
  { position: [-3.4, -2.4, -2], scale: 0.34, petal: COQUETTE.petalDeep, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [3.2, -2.6, -1.9], scale: 0.36, petal: COQUETTE.lavender, center: COQUETTE.pearl, petals: 6, type: "rose" },
  { position: [0, -3.2, -1.7], scale: 0.26, petal: COQUETTE.blush, center: COQUETTE.cream, petals: 5, type: "bloom" },
  { position: [-0.6, 1.6, -0.9], scale: 0.22, petal: COQUETTE.pearl, center: COQUETTE.lavender, petals: 5, type: "bloom" },
];

function PetalMaterial({ color }) {
  return (
    <meshPhysicalMaterial
      color={color}
      clearcoat={1}
      clearcoatRoughness={0.06}
      roughness={0.12}
      metalness={0.02}
      sheen={0.4}
      sheenRoughness={0.3}
      sheenColor={COQUETTE.cream}
    />
  );
}

function BloomFlower({ petalColor, centerColor, petalCount, scale }) {
  const petals = useMemo(
    () =>
      Array.from({ length: petalCount }, (_, i) => {
        const angle = (i / petalCount) * Math.PI * 2;
        return {
          x: Math.cos(angle) * 0.38,
          y: Math.sin(angle) * 0.38,
          rot: angle + Math.PI / 2,
        };
      }),
    [petalCount]
  );

  return (
    <group scale={scale}>
      {petals.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, 0]} rotation={[0.2, 0, p.rot]} scale={[0.55, 0.85, 0.35]}>
          <sphereGeometry args={[0.28, 12, 12]} />
          <PetalMaterial color={petalColor} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.06]} scale={0.55}>
        <sphereGeometry args={[0.2, 14, 14]} />
        <PetalMaterial color={centerColor} />
      </mesh>
    </group>
  );
}

function RoseFlower({ petalColor, centerColor, scale }) {
  const rings = useMemo(
    () => [
      { count: 5, radius: 0.32, z: 0, size: 0.24 },
      { count: 6, radius: 0.48, z: -0.04, size: 0.22, rotOffset: 0.3 },
      { count: 7, radius: 0.58, z: -0.08, size: 0.2, rotOffset: 0.6 },
    ],
    []
  );

  return (
    <group scale={scale}>
      {rings.map((ring, ri) =>
        Array.from({ length: ring.count }, (_, i) => {
          const angle = (i / ring.count) * Math.PI * 2 + (ring.rotOffset ?? 0);
          return (
            <mesh
              key={`${ri}-${i}`}
              position={[Math.cos(angle) * ring.radius, Math.sin(angle) * ring.radius, ring.z]}
              rotation={[0.35, 0, angle + Math.PI / 2]}
              scale={[0.5, 0.75, 0.3]}
            >
              <sphereGeometry args={[ring.size, 12, 12]} />
              <PetalMaterial color={ri === 0 ? centerColor : petalColor} />
            </mesh>
          );
        })
      )}
      <mesh position={[0, 0, 0.08]} scale={0.45}>
        <sphereGeometry args={[0.16, 12, 12]} />
        <PetalMaterial color={centerColor} />
      </mesh>
    </group>
  );
}

function CoquetteFlower({ position, scale, petal, center, petals, type, speed = 1.5 }) {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.08;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.35} floatIntensity={0.9}>
      <group ref={groupRef} position={position}>
        {type === "rose" ? (
          <RoseFlower petalColor={petal} centerColor={center} scale={scale} />
        ) : (
          <BloomFlower petalColor={petal} centerColor={center} petalCount={petals} scale={scale} />
        )}
      </group>
    </Float>
  );
}

function Pearl({ position, scale = 1 }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.25;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshPhysicalMaterial
          color={COQUETTE.pearl}
          roughness={0.08}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.08}
          iridescence={1}
          iridescenceIOR={1.3}
        />
      </mesh>
    </Float>
  );
}

function RibbonBow({ position, scale = 1 }) {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <group position={position} scale={scale}>
        <mesh position={[-0.55, 0.1, 0]} rotation={[0.3, 0, Math.PI / 5]}>
          <torusGeometry args={[0.45, 0.1, 12, 24, Math.PI * 1.2]} />
          <PetalMaterial color={COQUETTE.ribbon} />
        </mesh>
        <mesh position={[0.55, 0.1, 0]} rotation={[0.3, 0, -Math.PI / 5]}>
          <torusGeometry args={[0.45, 0.1, 12, 24, Math.PI * 1.2]} />
          <PetalMaterial color={COQUETTE.ribbon} />
        </mesh>
        <mesh position={[0, -0.15, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.18, 0.07, 10, 20]} />
          <PetalMaterial color={COQUETTE.cream} />
        </mesh>
      </group>
    </Float>
  );
}

function Heart({ position, scale = 0.35 }) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.3);
    shape.bezierCurveTo(0, 0.3, -0.3, 0.25, -0.3, 0);
    shape.bezierCurveTo(-0.3, -0.25, 0, -0.45, 0, -0.7);
    shape.bezierCurveTo(0, -0.45, 0.3, -0.25, 0.3, 0);
    shape.bezierCurveTo(0.3, 0.25, 0, 0.3, 0, 0.3);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.15,
      bevelEnabled: true,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    });
  }, []);

  const ref = useRef(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={ref} geometry={geometry} position={position} scale={scale}>
        <PetalMaterial color={COQUETTE.heart} />
      </mesh>
    </Float>
  );
}

function FlowerField({ flowers }) {
  return flowers.map((flower, i) => (
    <CoquetteFlower key={i} {...flower} speed={1.2 + (i % 5) * 0.15} />
  ));
}

function SceneContent({ reduced }) {
  const flowers = reduced ? FLOWERS_MOBILE : FLOWERS_DESKTOP;

  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[8, 8, 6]} intensity={1.2} color={COQUETTE.cream} />
      <pointLight position={[-6, -4, 4]} intensity={0.6} color={COQUETTE.lavender} />
      <pointLight position={[0, -6, 3]} intensity={0.35} color={COQUETTE.pearl} />

      <FlowerField flowers={flowers} />

      <Pearl position={reduced ? [-2.2, 1.8, -2] : [-3.8, 2.2, -2]} scale={reduced ? 0.28 : 0.38} />
      <Pearl position={reduced ? [2.5, 1.2, -1.5] : [4, 1.8, -1]} scale={reduced ? 0.32 : 0.44} />
      {!reduced && <Pearl position={[-2.8, -2.2, -1.5]} scale={0.24} />}

      <RibbonBow position={reduced ? [2.2, -1.5, -2] : [3.6, -1.2, -2]} scale={reduced ? 0.75 : 0.9} />
      <Heart position={reduced ? [-2, -0.8, 0] : [-3.2, -0.6, 0]} scale={reduced ? 0.24 : 0.3} />
      {!reduced && <Heart position={[2.2, 2.8, -1]} scale={0.2} />}

      <Sparkles
        count={reduced ? 30 : 60}
        scale={reduced ? 10 : 16}
        size={reduced ? 1 : 1.8}
        color={COQUETTE.pearl}
        speed={0.25}
      />
    </>
  );
}

export default function CoquetteScene() {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 10 : 9], fov: isMobile ? 52 : 48 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ alpha: true, antialias: !isMobile, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent reduced={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
