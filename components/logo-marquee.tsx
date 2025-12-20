"use client";

import { AnimatedText } from "./animated-text";

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
    <section className="py-16 border-y border-border/50 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200">
          Powered by Modern Infrastructure
        </h2>
      </div>

      <div className="relative">
        {/* Alpha mask fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-12 shrink-0 flex items-center opacity-70 hover:opacity-100 transition"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
