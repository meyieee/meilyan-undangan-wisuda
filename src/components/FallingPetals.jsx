import { SeasonalFX } from "seasonalfx/react";
import useIsMobile from "../hooks/useIsMobile";

export default function FallingPetals() {
  const isMobile = useIsMobile();
  const intensity = isMobile ? "subtle" : "moderate";

  return (
    <div className="fixed inset-0 pointer-events-none z-1" aria-hidden="true">
      <SeasonalFX
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
        season="spring"
        autoSeason={false}
        intensity={intensity}
        disableOnMobile={false}
        respectReducedMotion
        seasonConfig={{
          spring: {
            variant: "softPetals",
            intensity,
          },
        }}
        particleCustomization={{
          colorScheme: {
            minimal: "#fde8f0",
            subtle: "#f8c8dc",
            moderate: "#f4a8c8",
            bold: "#e9d5ff",
          },
          intensityColors: true,
        }}
      />
    </div>
  );
}
