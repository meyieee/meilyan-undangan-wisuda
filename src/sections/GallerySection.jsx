import meilyan from "../assets/memey.webp";
import lilies from "../assets/dreamy.webp";
import lotus from "../assets/gmbr.webp";
import butterfly from "../assets/kup.webp";export default function GallerySection() {
  return (
    <section
      className="py-stack-lg bg-surface-container-low/50 relative overflow-hidden pb-stack-lg"
      id="gallery"
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute left-0 bottom-0 h-40 md:h-52 w-auto opacity-35 pointer-events-none hidden md:block"
        src={lotus}
        loading="lazy"
        decoding="async"
      />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative">
        <div className="text-center mb-12">
          <h2 className="font-display-accent text-headline-lg text-primary italic">
            Cherished Moments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center justify-items-center w-full">
          <div className="relative flex flex-col items-center w-full max-w-[300px] mx-auto">
            <div className="absolute -left-6 -top-6 w-16 h-auto z-20 pointer-events-none hidden md:block">
              <img
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain -rotate-12 opacity-90"
                src={lotus}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="polaroid block w-full max-w-[300px] mx-auto">
              <img
                alt="Meilyan Elizabet Siwy"
                className="w-full aspect-square object-cover block"
                src={meilyan}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="font-label-romantic text-center mt-4 text-primary text-lg italic w-full">
              The Beginning
            </p>
          </div>

          <div className="relative flex flex-col items-center w-full max-w-[300px] mx-auto mt-8 md:mt-0">
            <div className="polaroid polaroid-alt block w-full max-w-[300px] mx-auto">
              <img
                alt="Graduation details and dreams"
                className="w-full aspect-square object-cover block"
                src={lilies}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="font-label-romantic text-center mt-4 text-primary text-lg italic w-full">
              Details &amp; Dreams
            </p>
            <div className="absolute -bottom-6 -right-6 w-20 h-auto opacity-70 pointer-events-none hidden md:block rotate-12">
              <img
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain"
                src={butterfly}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
