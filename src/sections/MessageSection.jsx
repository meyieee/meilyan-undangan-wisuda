import meilyan from "../assets/memey.jpeg";

export default function MessageSection() {
  return (
    <section className="relative z-10 scroll-mt-16 md:scroll-mt-20" id="message">
      <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-5 md:gap-8">
        <div className="w-full md:w-5/12 max-w-xs md:max-w-none mx-auto shrink-0">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-secondary-container/50">
            <img
              alt="Portrait of a joyful female university graduate"
              className="w-full h-full object-cover"
              src={meilyan}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/25 to-transparent" />
          </div>
        </div>

        <div className="w-full md:w-7/12 space-y-3 sm:space-y-4 text-center md:text-left">
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
            Special Message
          </span>
          <h3 className="font-display-lg text-xl sm:text-2xl md:text-3xl text-neutral leading-snug">
            A Celebration of New Beginnings
          </h3>
          <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-normal">
            Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i merupakan suatu kehormatan
            dan kebahagiaan bagi kami. Mari bersama-sama merayakan momen istimewa ini.
          </p>
          <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-normal italic">
            &ldquo;Stepping into tomorrow with a grateful heart for yesterday and a steadfast spirit for today.&rdquo;
          </p>
          <p className="font-display-lg text-base sm:text-lg text-neutral pt-1">
          </p>
        </div>
      </div>
    </section>
  );
}
