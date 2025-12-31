"use client";


const logos = [
  { src: "/logos/liquidmetal.avif", alt: "liquidmetal" },
  { src: "/logos/stripe.svg", alt: "stripe" },
  { src: "/logos/vultr.svg", alt: "vultr" },
  { src: "/logos/workos.svg", alt: "workos" },
  { src: "/logos/netlify.svg", alt: "netlify" },

  { src: "/logos/liquidmetal.avif", alt: "liquidmetal" },
  { src: "/logos/stripe.svg", alt: "stripe" },
  { src: "/logos/vultr.svg", alt: "vultr" },
  { src: "/logos/workos.svg", alt: "workos" },
  { src: "/logos/netlify.svg", alt: "netlify" },
];

export function LogoMarquee() {
  return (
    <section className="py-12 md:py-24 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
        <h2 className="font-sans text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/20 mb-4">
          Powered by Modern Infrastructure
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee opacity-30 hover:opacity-50 transition-opacity duration-500">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 shrink-0 flex items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
