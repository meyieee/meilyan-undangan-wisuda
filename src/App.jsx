import DeferredEffects from "./components/DeferredEffects";
import HomeSection from "./sections/HomeSection";
import DetailsSection from "./sections/DetailsSection";
import GallerySection from "./sections/GallerySection";

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden antialiased">
      <DeferredEffects />

      <main className="relative z-10">
        <HomeSection />
        <DetailsSection />
        <GallerySection />
      </main>

      <footer className="relative z-10 bg-surface-container-low w-full py-stack-lg flex flex-col items-center gap-stack-md text-center mt-stack-lg border-t border-cream-vellum/50">
        <div className="font-label-romantic text-label-romantic text-on-surface mb-2">
          Meilyan Elizabet Siwy
        </div>
        <div className="flex gap-6 mb-4">
          <a
            className="text-on-surface-variant hover:text-secondary-container transition-colors font-detail-sm text-detail-sm opacity-80 hover:opacity-100"
            href="#details"
          >
            Contact
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary-container transition-colors font-detail-sm text-detail-sm opacity-80 hover:opacity-100"
            href="#details"
          >
            RSVP Info
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary-container transition-colors font-detail-sm text-detail-sm opacity-80 hover:opacity-100"
            href="https://maps.app.goo.gl/xFyD2uxLgr3wxVHE6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Map
          </a>
        </div>
        <p className="font-detail-sm text-detail-sm text-on-surface-variant/70">
          © 2026 Meilyan Elizabet Siwy, S.Kom. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
