import MaterialIcon from "./MaterialIcon";
import useActiveSection from "../hooks/useActiveSection";

const LINKS = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#details", id: "details", label: "Details" },
  { href: "#gallery", id: "gallery", label: "Gallery" },
];

const MOBILE_LINKS = [
  { href: "#home", id: "home", label: "Home", icon: "home" },
  { href: "#details", id: "details", label: "Details", icon: "auto_stories" },
  { href: "#gallery", id: "gallery", label: "Gallery", icon: "photo_library" },
];

export default function Navigation() {
  const active = useActiveSection();

  return (
    <>
      <header className="bg-cream-vellum/60 backdrop-blur-xl fixed top-0 w-full border-b border-rose-gold/30 shadow-sm flex justify-between items-center px-margin-mobile md:px-gutter h-16 z-50">
        <div className="font-display-accent text-headline-lg-mobile text-primary italic truncate">
          Meyi
        </div>

        <nav className="hidden md:flex gap-gutter items-center">
          {LINKS.map(({ href, id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                className={`font-detail-sm text-detail-sm transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-primary hover:bg-primary-container/20 px-2 py-1 rounded"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <button type="button" className="md:hidden text-primary p-2" aria-label="Menu">
          <MaterialIcon name="menu" />
        </button>
      </header>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-1.5 bg-cream-vellum/95 backdrop-blur-xl border-t border-rose-gold/40 shadow-[0_-4px_20px_rgba(142,90,90,0.08)] rounded-t-2xl md:hidden">
        {MOBILE_LINKS.map(({ href, id, label, icon }) => {
          const isActive = active === id;
          return (
            <a
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center min-w-16 py-1 rounded-full transition-colors duration-200 ${
                isActive
                  ? "bg-secondary text-white px-3"
                  : "text-on-surface-variant hover:bg-primary-container/40 px-2"
              }`}
            >
              <MaterialIcon name={icon} className="text-xl mb-0.5" filled={isActive} />
              <span className={`font-detail-sm text-[10px] ${isActive ? "text-white" : ""}`}>
                {label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
