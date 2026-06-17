import meilyan from "../assets/memey.webp";

const FLORAL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6AIvSa32-WcNm0x5a_-3b8OST51rP9vX7Wfse5xtx_I16n-C4vldyWtdxYUQ2AYsuc8X0CMxhhBQ42FpSnTSwcKHUzYm4wtuxWc6CfqkjXS8t4kIa-l0G-PjO1aIAWe2FWL9F_kBNu2MYFYg6gQd9Nq8lVV2VMVjwS_A40quwIddgoL9eCB_vUvKbDYJkai9VhK1sAJE9ZgZdRUAicKnnT5yWu6iZRJGBpWw3kmQVHO5wxFvkYCKAZBMUb8RIX42ZROW3W7WgTM";

const GALLERY_SECOND =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNUEkePE2JLUbOr-KFHj0Dm3w0S2ZioJ-QBmQkbyR3V_IZN8JbGTv2NF9B8cMMIJHR04TpJuIYCdNtctMaXcC78BMuiUUlmgzbNS3rVk_5EScp90LMilWgVm1S2w1TVcVbInHSKIpdejsGM7OXuSHoXFnRsUtrWr05zekPfJIlhQPiWvH1HfIawtEEcw_TERDa5IhzljLiQemv-VIeWatrT2ZMSe0uKSJAF68I6Nx9OXjGunY5YKC89hvlYoHzZ9pNIAvlZjYwSNA";

export default function GallerySection() {
  return (
    <section
      className="py-stack-lg bg-surface-container-low/50 relative overflow-hidden pb-stack-lg"
      id="gallery"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-display-accent text-headline-lg text-primary italic">
            Cherished Moments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center justify-items-center w-full">
          <div className="relative flex flex-col items-center w-full max-w-[300px] mx-auto">
            <div className="absolute -left-4 -top-4 w-12 h-12 z-20 pointer-events-none hidden md:block">
              <img
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover rounded-full shadow-sm"
                src={FLORAL}
                style={{ clipPath: "circle(30%)" }}
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
                src={GALLERY_SECOND}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="font-label-romantic text-center mt-4 text-primary text-lg italic w-full">
              Details &amp; Dreams
            </p>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-40 pointer-events-none hidden md:block rotate-12">
              <img alt="" aria-hidden="true" className="w-full h-full object-contain" src={FLORAL} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
