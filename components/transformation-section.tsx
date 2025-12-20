"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, Sparkles } from "lucide-react";

export function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background with warm tint */}
      <div className="absolute inset-0 bg-[#faf7f2]" />

      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-cream/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-warm-beige/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-tan/10 border border-warm-tan/20 text-warm-tan text-sm font-medium mb-6 transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            <Sparkles className="w-4 h-4" />
            The Transformation
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            From chaos to
            <br />
            <span className="italic text-stone-400">
              crystal clarity
            </span>
          </h2>
        </div>

        {/* Transformation visual */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Card 1 */}
            <div
              className={`transition-all duration-700 delay-300 ${isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
                }`}
            >
              <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
                <img
                  src="/sandboard/fog.png"
                  alt="Messy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                Raw Ideas
              </h3>
              <p className="mt-2 text-center text-muted-foreground text-sm">
                Unstructured thoughts, notes, <br />and concepts scattered everywhere.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`transition-all duration-700 delay-500 ${isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
                }`}
            >
              <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
                <img
                  src="/sandboard/ai.png"
                  alt="Working"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                AI Structuring
              </h3>
              <p className="mt-2 text-center text-muted-foreground text-sm">
                AI analyzes, connects, and <br />shapes ideas into a working plan.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`transition-all duration-700 delay-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
                }`}
            >
              <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
                <img
                  src="/sandboard/direction.png"
                  alt="Clear"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                Execution-Ready Plan
              </h3>
              <p className="mt-2 text-center text-muted-foreground text-sm">
                Clear steps, priorities, and <br />outputs you can act on immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-700 delay-900 ${isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
            }`}
        >
          {[
            { value: "95%", label: "Faster Planning" },
            { value: "10x", label: "More Clarity" },
            { value: "2.4k+", label: "Ideas Transformed" },
            { value: "48hrs", label: "Avg. Time Saved" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-serif text-warm-tan mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-stone-500 font-medium uppercase tracking-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
