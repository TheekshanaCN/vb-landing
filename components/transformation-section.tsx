"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";

export function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-white/[0.02] rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            The Evolution
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            From chaos to <br />
            <span className="text-white/30 italic">structural clarity.</span>
          </h2>
        </div>

        {/* Transformation visual */}
        <div className="grid md:grid-cols-3 gap-12 items-start relative">
          {/* Connector line background */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-12" />

          {/* Card 1 */}
          <div className="relative z-10 space-y-6 group">
            <div className="aspect-[4/3] rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="w-full h-full bg-black/40 flex items-center justify-center p-8">
                <div className="space-y-2 opacity-20">
                  <div className="h-2 w-32 bg-white rounded" />
                  <div className="h-2 w-24 bg-white rounded" />
                  <div className="h-2 w-40 bg-white rounded" />
                </div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Raw Ideas</h3>
              <p className="text-sm text-white/40 max-w-[240px] mx-auto">Unstructured thoughts and scattered concepts.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative z-10 space-y-6 group">
            <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-white/[0.05] overflow-hidden group-hover:border-white/20 transition-all duration-700 shadow-2xl">
              <div className="w-full h-full bg-black flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.02] animate-pulse" />
                <Cpu className="w-12 h-12 text-white animate-fade-in" />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">AI Synthesis</h3>
              <p className="text-sm text-white/40 max-w-[240px] mx-auto">AI analyzes and shapes ideas into a working plan.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative z-10 space-y-6 group">
            <div className="aspect-[4/3] rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden group-hover:border-white/10 transition-all duration-700">
              <div className="w-full h-full bg-black/40 flex items-center justify-center p-8">
                <div className="w-full space-y-3">
                  <div className="h-8 w-full rounded-lg bg-white/10 border border-white/10 flex items-center px-3">
                    <div className="h-1.5 w-1/2 bg-white/20 rounded" />
                  </div>
                  <div className="h-8 w-full rounded-lg bg-white/5 border border-white/5 flex items-center px-3">
                    <div className="h-1.5 w-1/3 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Production Roadmap</h3>
              <p className="text-sm text-white/40 max-w-[240px] mx-auto">Clear steps and priorities you can act on.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 md:mt-32 border-t border-white/5 pt-12 md:pt-16 px-4">
          {[
            { value: "95%", label: "Faster Architecture" },
            { value: "10x", label: "Structural Clarity" },
            { value: "2.5k+", label: "Ideas Solved" },
            { value: "48hrs", label: "Time Optimized" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white italic">
                {stat.value}
              </div>
              <div className="text-[9px] md:text-[10px] text-white/30 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
