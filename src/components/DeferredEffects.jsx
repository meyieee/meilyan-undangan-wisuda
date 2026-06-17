import { lazy, Suspense, useEffect, useState } from "react";

const CoquetteScene = lazy(() => import("./CoquetteScene"));
const FallingPetals = lazy(() => import("./FallingPetals"));

export default function DeferredEffects() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const mount = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(mount, { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }

    const timer = setTimeout(mount, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <CoquetteScene />
      <FallingPetals />
    </Suspense>
  );
}
