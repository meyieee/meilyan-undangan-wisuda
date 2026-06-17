import MaterialIcon from "./MaterialIcon";

export default function DetailCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      <div className="glass-card p-4 sm:p-5 rounded-xl flex flex-col items-center text-center">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-container flex items-center justify-center mb-3 shadow-inner">
          <MaterialIcon name="calendar_month" className="text-neutral text-xl sm:text-2xl" />
        </div>
        <h4 className="font-display-lg text-lg sm:text-xl text-neutral mb-1">Tanggal</h4>
        <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant font-medium">
          Minggu, 21 Juni 2026
        </p>
      </div>

      <div className="glass-card p-4 sm:p-5 rounded-xl flex flex-col items-center text-center">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary-container flex items-center justify-center mb-3 shadow-inner">
          <MaterialIcon name="schedule" className="text-neutral text-xl sm:text-2xl" />
        </div>
        <h4 className="font-display-lg text-lg sm:text-xl text-neutral mb-1">Waktu</h4>
        <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant font-medium">
          15.30 WITA - Selesai
        </p>
      </div>

      <div className="glass-card p-4 sm:p-5 rounded-xl flex flex-col items-center text-center">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-tertiary-container flex items-center justify-center mb-3 shadow-inner border border-outline-variant/30">
          <MaterialIcon name="location_on" className="text-neutral text-xl sm:text-2xl" />
        </div>
        <h4 className="font-display-lg text-lg sm:text-xl text-neutral mb-1">Lokasi</h4>
        <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant font-medium mb-3">
          Meilyan Home
        </p>
        <a
          href="https://maps.app.goo.gl/xFyD2uxLgr3wxVHE6"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button px-4 py-2 rounded-full font-label-sm text-label-sm text-white inline-flex items-center gap-1.5"
        >
          <MaterialIcon name="map" className="text-sm" />
          Lihat Peta
        </a>
      </div>
    </div>
  );
}
