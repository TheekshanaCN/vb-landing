"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, Sparkles } from "lucide-react";

export function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6 transition-all duration-700 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            The Transformation
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            From chaos to
            <br />
            <span className="italic text-muted-foreground">
              crystal clarity
            </span>
          </h2>
        </div>

        {/* Transformation visual */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Card 1 */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
                <img
                  src="/reprecent/messy.png"
                  alt="Messy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                Messy Workspace
              </h3>
              <p className="mt-2 text-center text-muted-foreground text-sm">
                Shows the initial cluttered state before transformation.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
                <img
                  src="/reprecent/clear.png"
                  alt="Working"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                In Progress
              </h3>
              <p className="mt-2 text-center text-muted-foreground text-sm">
                Illustrates the active phase of the workflow improvement.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`transition-all duration-700 delay-700 ${
                isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
                <img
                  src="/reprecent/clear.png"
                  alt="Clear"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                Clear & Organized
              </h3>
              <p className="mt-2 text-center text-muted-foreground text-sm">
                Shows the final clean and organized workspace after
                transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-700 delay-900 ${
            isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
          }`}
        >
          {[
            { value: "95%", label: "Faster Planning" },
            { value: "10x", label: "More Clarity" },
            { value: "2.4k+", label: "Ideas Transformed" },
            { value: "48hrs", label: "Avg. Time Saved" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
