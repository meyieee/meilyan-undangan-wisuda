import MaterialIcon from "../components/MaterialIcon";
import heroBg from "../assets/bg.webp";
import tulipBorder from "../assets/fl.webp";
import lotus from "../assets/gmbr.webp";
import butterfly from "../assets/kup.webp";

export default function HomeSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-stack-lg pb-stack-lg px-margin-mobile md:px-gutter overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right md:object-center opacity-80"
          src={heroBg}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-vellum/50 via-cream-vellum/15 to-surface max-md:from-cream-vellum/55" />
      </div>

      <img
        alt=""
        aria-hidden="true"
        className="absolute left-0 bottom-[22%] sm:bottom-[24%] md:bottom-[26%] h-48 sm:h-52 md:h-56 w-auto opacity-85 pointer-events-none z-0 object-contain object-left"
        src={tulipBorder}
        loading="lazy"
        decoding="async"
      />

      <img
        alt=""
        aria-hidden="true"
        className="absolute right-4 top-16 md:right-12 md:top-20 w-16 md:w-20 h-auto opacity-70 pointer-events-none z-[1] rotate-12"
        src={butterfly}
        loading="lazy"
        decoding="async"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-stack-md mt-12 md:mt-0 px-2">
        <div
          className="w-16 h-16 rounded-full bg-rose-gold/40 backdrop-blur-sm border border-rose-gold/60 flex items-center justify-center shadow-sm mb-4 animate-pulse"
          style={{ animationDuration: "4s" }}
        >
          <MaterialIcon name="school" className="text-hero-accent" filled />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-vellum/70 backdrop-blur-md border border-rose-gold/50 text-hero-accent font-detail-sm text-detail-sm uppercase tracking-wider hero-text-shadow">
          <span className="w-2 h-2 rounded-full bg-soft-sage" />
          Class of 2026
        </div>

        <div className="space-y-4 mt-stack-md w-full">
          <h2 className="font-label-romantic text-label-romantic text-hero-subtitle italic hero-text-shadow">
            You&apos;re Invited to Graduation party of
          </h2>
          <h1
            className="font-klaristha text-[clamp(0.9rem,2.8vw+0.65rem,2.75rem)] text-hero-title leading-tight whitespace-nowrap w-full hero-text-shadow"
          >
            Meilyan Elizabet Siwy, S.Kom.
          </h1>
        </div>

        <p className="font-body-md text-body-md text-hero-body max-w-lg mx-auto mt-stack-sm leading-relaxed hero-text-shadow">
          This milestone is a reflection of the love and support that surrounds me. I invite all of you to cherish this unforgettable moment together.
        </p>

        <div className="mt-stack-lg flex items-center justify-center gap-2 sm:gap-3">
          <img
            alt=""
            aria-hidden="true"
            className="h-14 md:h-16 w-auto opacity-80 pointer-events-none shrink-0 object-contain"
            src={lotus}
            loading="lazy"
            decoding="async"
          />
          <a
            href="#details"
            className="ribbon-btn px-8 py-3 rounded-full font-detail-sm text-detail-sm uppercase tracking-widest inline-flex items-center gap-2"
          >
            View Details
            <MaterialIcon name="arrow_downward" className="text-sm" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />
    </section>
  );
}
