"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { AnimatedText } from "./animated-text";
import {
  MessageSquare,
  Calendar,
  Sparkles,
  LayoutGrid,
  Zap,
} from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [cardsRevealed, setCardsRevealed] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (isInView) {
      cardsRevealed.forEach((_, index) => {
        setTimeout(() => {
          setCardsRevealed((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 400 + index * 150);
      });
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-44 pb-20 px-6 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-cream/40 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-warm-cream/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground text-balance max-w-4xl mx-auto">
            <AnimatedText
              text="The AI Workspace for "
              delay={0}
              isInView={isInView}
            />
            <br className="hidden md:block" />
            <AnimatedText
              text="Transforming "
              delay={200}
              isInView={isInView}
            />
            <span className="italic text-stone-400">
              <AnimatedText text="Ideas " delay={200} isInView={isInView} />
            </span>
            <AnimatedText text="into " delay={200} isInView={isInView} />
            <span className="text-warm-tan">
              <AnimatedText text="Reality" delay={400} isInView={isInView} />
            </span>
          </h1>
        </div>

        <div className="relative">
          {/* Main showcase container with border */}
          <div className="p-1 bg-warm-tan/30 rounded-lg shadow-2xl shadow-warm-tan/10">
            <div
              className={`relative rounded-lg border border-border/60 bg-[#1a1816] backdrop-blur-sm p-6 md:p-8 transition-all duration-1000 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: "300ms" }}
            >


              {/* Cards grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
                {/* Card 1 - Document folder style */}
                <div
                  className={`col-span-1 row-span-2 rounded-2xl bg-amber-100 p-5 flex flex-col transition-all duration-700 ${cardsRevealed[0]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <span className="text-xs text-amber-700/70 mb-auto">
                    Aug 7 8:01am
                  </span>
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold text-amber-900">
                      Project Ideas
                    </h3>
                    <p className="text-sm text-amber-700/70">
                      12 blueprints inside
                    </p>
                  </div>
                </div>

                {/* Card 2 - Feature card */}
                <div
                  className={`rounded-2xl bg-slate-800 p-5 flex flex-col transition-all duration-700 ${cardsRevealed[1]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <h4 className="text-sm font-semibold text-white mb-2">
                    The AI Workspace for Modern Creators
                  </h4>
                  <div className="flex-1 flex items-center justify-center my-3">
                    <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">IdeaForge Introduction</p>
                  <p className="text-xs text-slate-500 mt-1">3.56M</p>
                </div>

                {/* Card 3 - Image placeholder */}
                <div
                  className={`rounded-2xl overflow-hidden transition-all duration-700 ${cardsRevealed[2]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <img
                    src="/reprecent/messy.png"
                    alt="Creative workspace"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card 4 - Note/Todo card */}
                <div
                  className={`rounded-2xl bg-rose-50 p-5 transition-all duration-700 ${cardsRevealed[3]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-rose-400">Name</span>
                  </div>
                  <h4 className="text-lg font-semibold text-rose-900 mb-1">
                    Note
                  </h4>
                  <p className="text-xs text-rose-400 mb-4">
                    This is the subtitle
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-rose-200 pb-1">
                      <span className="text-rose-600">Title</span>
                      <span className="text-rose-400">Date</span>
                    </div>
                    <p className="font-handwriting text-rose-800 italic">
                      To-do List
                    </p>
                    <p className="font-handwriting text-rose-800 italic">
                      Launch MVP
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-rose-500" />
                    <span className="text-xs font-medium text-rose-700">
                      FORGE
                    </span>
                  </div>
                </div>

                {/* Card 5 - Calendar card */}
                <div
                  className={`rounded-2xl bg-white border border-border p-4 transition-all duration-700 ${cardsRevealed[4]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">
                      February
                    </span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-[10px] text-muted-foreground mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <span key={day} className="text-center">
                        {day}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {Array.from({ length: 28 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-center py-0.5 rounded ${i === 12
                          ? "bg-accent text-white"
                          : i === 13
                            ? "bg-rose-400 text-white"
                            : "text-muted-foreground"
                          }`}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">Mon 17</span>
                      <span className="flex-1 px-2 py-1 rounded bg-teal-500 text-white text-[10px]">
                        Launch Day
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">Tue 18</span>
                      <span className="flex-1 px-2 py-1 rounded bg-teal-600 text-white text-[10px]">
                        User Testing
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 6 - Blueprint preview (spans 2 cols on larger screens) */}
                <div
                  className={`col-span-2 md:col-span-2 rounded-2xl bg-white border border-border p-5 transition-all duration-700 ${cardsRevealed[5]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        AI Blueprint Generator
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Powered by GPT-4
                      </p>
                    </div>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Enter your idea...
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-accent/30 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-accent rounded-full animate-pulse" />
                      </div>
                      <span className="text-xs text-accent font-medium">
                        Generating...
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 7 - Chat interface */}
                <div
                  className={`col-span-2 md:col-span-1 rounded-2xl bg-white border border-border p-4 transition-all duration-700 ${cardsRevealed[5]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">
                        New Chat
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-[10px] text-primary-foreground font-medium">
                          AI
                        </span>
                      </div>
                      <div className="flex-1 bg-secondary rounded-lg p-2">
                        <p className="text-xs text-foreground">
                          Hi! What do you want to create today?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg">
                    <input
                      type="text"
                      placeholder="Describe your idea..."
                      className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none"
                      readOnly
                    />
                    <div className="text-[10px] text-accent font-medium">
                      GPT-4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
