"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { FlashlightCard } from "./flashlight-card"

const cards = [
  {
    step: "01",
    title: "Brain Dump",
    description: "Pour out all your messy thoughts, random ideas, and half-baked concepts. No structure needed.",
    image: "/messy-sticky-notes-and-scattered-ideas-brainstormi.jpg",
  },
  {
    step: "02",
    title: "AI Analysis",
    description:
      "Our AI analyzes patterns, identifies core value propositions, and structures your chaos into clarity.",
    image: "/ai-neural-network-processing-data-clean-visualizat.jpg",
  },
  {
    step: "03",
    title: "Clear Roadmap",
    description: "Receive a step-by-step action plan with milestones, timelines, and success metrics.",
    image: "/clean-organized-roadmap-timeline-with-milestones-m.jpg",
  },
]

export function RotatingCards() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % cards.length)
  }

  return (
    <section ref={sectionRef} id="how-it-works" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"}`}
            style={{ animationFillMode: "both" }}
          >
            How it Works
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-700 delay-200 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"}`}
            style={{ animationFillMode: "both" }}
          >
            From chaos to clarity
            <br />
            <span className="italic text-muted-foreground">in three steps</span>
          </h2>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-400 ${isInView ? "translate-y-0 blur-0" : "translate-y-16 blur-sm"}`}
          style={{ animationFillMode: "both" }}
        >
          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Cards container */}
          <div className="relative h-[500px] md:h-[600px] perspective-1000">
            {cards.map((card, index) => {
              const offset = (index - activeIndex + cards.length) % cards.length
              const isActive = offset === 0
              const isPrev = offset === cards.length - 1
              const isNext = offset === 1

              return (
                <div
                  key={card.step}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform: isActive
                      ? "translateX(0) scale(1) rotateY(0deg)"
                      : isPrev
                        ? "translateX(-30%) scale(0.85) rotateY(15deg)"
                        : isNext
                          ? "translateX(30%) scale(0.85) rotateY(-15deg)"
                          : "translateX(0) scale(0.7) rotateY(0deg)",
                    zIndex: isActive ? 10 : 5,
                    opacity: isActive ? 1 : 0.5,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                  }}
                >
                  <FlashlightCard className="h-full">
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-6xl md:text-8xl font-serif text-accent/20 mb-4">{card.step}</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{card.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{card.description}</p>
                      </div>
                      <div className="relative h-64 md:h-full">
                        <img
                          src={card.image || "/placeholder.svg"}
                          alt={card.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </FlashlightCard>
                </div>
              )
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
