const MAPS_LINK = "https://maps.app.goo.gl/xFyD2uxLgr3wxVHE6";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=1.4197813,124.9911402&hl=id&z=17&output=embed";

export default function MapPlaceholder() {
  return (
    <div className="glass-card w-full h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-sm relative">
      <iframe
        src={MAPS_EMBED}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Meilyan Home"
        className="w-full h-full"
      />
      <a
        href={MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 ribbon-btn px-3 py-1.5 rounded-full font-detail-sm text-detail-sm inline-flex items-center gap-1 shadow-md"
      >
        Buka di Maps
      </a>
    </div>
  );
}
