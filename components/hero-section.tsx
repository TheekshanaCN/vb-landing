"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import {
  MessageSquare,
  Calendar,
  Sparkles,
  LayoutGrid,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { AnimatedButton } from "./animated-button";


export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
      {/* Enhanced background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[500px] bg-white/[0.08] rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[250px] md:h-[400px] bg-gradient-to-b from-white/[0.1] to-transparent rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] md:text-xs font-medium animate-fade-in">
            <Sparkles className="w-3 h-3 text-white" />
            <span>AI-Powered Project Architect</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-balance max-w-5xl mx-auto leading-[1.1]">
            Build your SaaS with <br />
            <span className="text-white/40 italic">Structural Intelligence</span>
          </h1>

          <p className="text-base md:text-xl text-white/50 max-w-2xl mx-auto text-balance font-medium px-4">
            Stop building blind. IdeaForge transforms your vision into a complete architectural blueprint: visual maps, tech stacks, and MVP roadmaps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4">
            <AnimatedButton
              className="w-full sm:w-auto px-8 py-4 md:py-6 text-base md:text-lg bg-white text-black hover:bg-white/90 font-bold rounded-2xl"
              onClick={() => window.open("https://app-ideaforge.netlify.app/", "_blank")}
            >
              Start Building Now
            </AnimatedButton>
            <button className="w-full sm:w-auto px-8 py-4 md:py-6 text-base md:text-lg text-white/60 hover:text-white font-medium transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mt-8 group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] -m-1" />
          <div className="relative bg-[#0a0a0a] rounded-[2.2rem] border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="h-4 w-px bg-white/5 mx-2" />
                <span className="text-white/40 text-xs font-mono lowercase">blueprint_v1.0</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/40 font-mono">GPT-4o</div>
                <Image
                  src="/profile/photo.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-8 grid grid-cols-12 gap-4 md:gap-6 min-h-[400px] md:min-h-[500px]">
              {/* Left Column - Visual Map Prevew */}
              <div className="col-span-12 lg:col-span-7 space-y-4 md:space-y-6">
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 h-full relative overflow-hidden group/map">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      <LayoutGrid className="w-4 h-4 text-white/40" />
                      Visual Architecture
                    </h3>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">interactive_nodes</span>
                  </div>

                  {/* Mock Visual Map */}
                  <div className="relative flex items-center justify-center py-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)]" />
                    <div className="relative space-y-12 w-full max-w-sm">
                      <div className="p-4 rounded-xl bg-white text-black text-center font-bold text-sm shadow-xl relative z-10 mx-auto w-40">
                        SaaS Idea
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs text-center backdrop-blur-sm">
                          Core Logic
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs text-center backdrop-blur-sm">
                          User Journey
                        </div>
                      </div>
                      {/* Connecting lines (CS inspired) */}
                      <div className="absolute inset-0 pointer-events-none opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          <path d="M200 80 V120 M200 120 H100 V160 M200 120 H300 V160" stroke="white" strokeWidth="1" fill="none" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5 space-y-4 md:space-y-6">
                {/* Tech Stack Card */}
                <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-4 md:mb-6">
                    <Zap className="w-4 h-4 text-white" />
                    <h3 className="text-white font-semibold text-sm md:text-base">Recommended Stack</h3>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { l: "Frontend", v: "Next.js 15, Tailwind" },
                      { l: "Backend", v: "Node.js, Supabase" },
                      { l: "AI Engine", v: "OpenAI SDK" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors gap-1 sm:gap-2">
                        <span className="text-[10px] text-white/30 uppercase tracking-wider">{item.l}</span>
                        <span className="text-[11px] md:text-xs text-white/80 font-medium">{item.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MVP Roadmap Card */}
                <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-4 md:mb-6">
                    <Calendar className="w-4 h-4 text-white/40" />
                    <h3 className="text-white font-semibold text-sm md:text-base">MVP Roadmap</h3>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      { t: "Phase 1: Foundation", s: "completed" },
                      { t: "Phase 2: Core AI Loop", s: "in-progress" },
                      { t: "Phase 3: Beta Launch", s: "upcoming" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.s === 'completed' ? 'bg-white' : item.s === 'in-progress' ? 'bg-white' : 'bg-white/10'}`} />
                        <span className={`text-sm font-medium ${item.s === 'upcoming' ? 'text-white/20' : 'text-white/80'}`}>{item.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
