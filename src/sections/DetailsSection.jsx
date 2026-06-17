import MaterialIcon from "../components/MaterialIcon";
import MapPlaceholder from "../components/MapPlaceholder";

const FLORAL_BLUR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6AIvSa32-WcNm0x5a_-3b8OST51rP9vX7Wfse5xtx_I16n-C4vldyWtdxYUQ2AYsuc8X0CMxhhBQ42FpSnTSwcKHUzYm4wtuxWc6CfqkjXS8t4kIa-l0G-PjO1aIAWe2FWL9F_kBNu2MYFYg6gQd9Nq8lVV2VMVjwS_A40quwIddgoL9eCB_vUvKbDYJkai9VhK1sAJE9ZgZdRUAicKnnT5yWu6iZRJGBpWw3kmQVHO5wxFvkYCKAZBMUb8RIX42ZROW3W7WgTM";

const MAPS_LINK = "https://maps.app.goo.gl/xFyD2uxLgr3wxVHE6";

export default function DetailsSection() {
  return (
    <section
      className="py-stack-lg md:py-24 px-margin-mobile md:px-gutter max-w-container-max mx-auto relative scroll-mt-16"
      id="details"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-20 pointer-events-none z-0">
        <img alt="" aria-hidden="true" className="w-full h-full object-cover blur-sm" src={FLORAL_BLUR} />
      </div>

      <div className="text-center mb-stack-lg relative z-10">
        <h2 className="font-display-accent text-headline-lg text-primary italic">
          The Celebration Details
        </h2>
        <div className="w-12 h-0.5 bg-rose-gold mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="glass-card rounded-xl p-8 md:p-12 flex flex-col gap-12 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-16 h-8 bg-rose-gold/20 rotate-45 origin-bottom-left pointer-events-none" />
          <div className="absolute -left-4 -bottom-4 w-16 h-8 bg-rose-gold/20 -rotate-45 origin-top-right pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-rose-gold/30 pb-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/50 flex items-center justify-center text-secondary">
                <MaterialIcon name="calendar_month" />
              </div>
              <div className="space-y-1">
                <h3 className="font-label-romantic text-label-romantic text-on-surface">Tanggal</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Minggu, 21 Juni 2026</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/50 flex items-center justify-center text-secondary">
                <MaterialIcon name="schedule" />
              </div>
              <div className="space-y-1">
                <h3 className="font-label-romantic text-label-romantic text-on-surface">Waktu</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">15.00 WITA - Selesai</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-12 h-12 rounded-full bg-primary-container/50 flex items-center justify-center text-secondary">
              <MaterialIcon name="location_on" />
            </div>
            <div className="space-y-2">
              <h3 className="font-label-romantic text-label-romantic text-on-surface">Lokasi</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Meilyan Home</p>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ribbon-btn px-8 py-3 rounded-full font-detail-sm text-detail-sm uppercase tracking-wider inline-flex items-center gap-2 active:scale-95"
            >
              Lihat Peta
              <MaterialIcon name="map" className="text-base" />
            </a>
            <div className="pt-2 opacity-70">
              <MaterialIcon name="local_florist" className="text-rose-gold text-lg" />
            </div>
          </div>
        </div>

        <div className="mt-stack-lg">
          <MapPlaceholder />
        </div>
      </div>
    </section>
  );
}
