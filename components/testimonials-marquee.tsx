"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { FlashlightCard } from "./flashlight-card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I went from a napkin sketch to a fully funded startup in 4 months. IdeaForge's blueprint was my north star.",
    author: "Sarah Chen",
    role: "Founder, StreamlineHQ",
    company: "Raised $2.3M",
    avatar: "/female-founder-portrait-asian-professional.jpg",
  },
  {
    quote:
      "The visual node maps finally helped my co-founder understand my vision. We were aligned for the first time ever.",
    author: "Marcus Johnson",
    role: "CTO, BuildFast",
    company: "YC S24",
    avatar: "/male-founder-portrait-african-american-professiona.jpg",
  },
  {
    quote: "Used the generated prompt in v0 and had a working prototype in 3 hours. This is the future of building.",
    author: "Elena Rodriguez",
    role: "Solo Founder, LaunchPad",
    company: "1000+ users",
    avatar: "/female-founder-portrait-latina-professional.jpg",
  },
  {
    quote: "The MVP checklist alone saved me from scope creep. Launched lean, validated fast, then scaled.",
    author: "David Kim",
    role: "CEO, Nexus AI",
    company: "Series A",
    avatar: "/male-founder-portrait-korean-professional.jpg",
  },
  {
    quote: "I'm not technical at all. IdeaForge translated my ideas into language that developers actually understood.",
    author: "Amanda Foster",
    role: "Founder, ScaleUp",
    company: "$50K MRR",
    avatar: "/female-entrepreneur-portrait-professional-blonde.jpg",
  },
  {
    quote: "Every idea I have now goes through IdeaForge first. It's like having a CTO in my pocket.",
    author: "James Wright",
    role: "Serial Entrepreneur",
    company: "3 exits",
    avatar: "/male-entrepreneur-portrait-professional-gray-hair.jpg",
  },
]

const secondRow = [
  {
    quote: "The tech stack recommendations were spot on. Would've taken weeks to figure that out myself.",
    author: "Lisa Park",
    role: "Founder, DataFlow",
    company: "Backed by a16z",
    avatar: "/female-founder-asian-professional-portrait.jpg",
  },
  {
    quote:
      "Showed my IdeaForge blueprint to investors. They said it was the clearest pitch deck alternative they'd seen.",
    author: "Michael Torres",
    role: "CEO, QuickShip",
    company: "$1.2M raised",
    avatar: "/male-founder-hispanic-professional-portrait.jpg",
  },
  {
    quote: "From 50 sticky notes of chaos to a clear product vision in 10 minutes. Absolutely magical.",
    author: "Rachel Green",
    role: "Product Lead, TechStart",
    company: "Ex-Google",
    avatar: "/female-professional-portrait-redhead.jpg",
  },
  {
    quote: "The market insights feature helped us pivot before wasting 6 months on the wrong product.",
    author: "Chris Anderson",
    role: "Co-founder, Metric",
    company: "Profitable in 8mo",
    avatar: "/male-founder-portrait-professional-beard.jpg",
  },
  {
    quote: "Our entire agency uses IdeaForge for client discovery. Cuts our planning phase in half.",
    author: "Nina Patel",
    role: "Agency Owner, DigitalFirst",
    company: "100+ clients",
    avatar: "/female-founder-indian-professional-portrait.jpg",
  },
  {
    quote: "Best $29 I spend every month. The ROI is insane when you calculate time saved.",
    author: "Tom Baker",
    role: "Indie Hacker",
    company: "5 micro-SaaS",
    avatar: "/male-developer-portrait-casual-professional.jpg",
  },
]

export function TestimonialsMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6 transition-all duration-700 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            Loved by founders
            <br />
            <span className="italic text-muted-foreground">building the future</span>
          </h2>
        </div>
      </div>

      {/* First row - left to right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee-slow">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="shrink-0 w-[380px] mx-3">
              <FlashlightCard>
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-sm">{`"${testimonial.quote}"`}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover bg-secondary"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="px-2 py-1 rounded bg-accent/10 text-accent text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </FlashlightCard>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - right to left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee-reverse">
          {[...secondRow, ...secondRow].map((testimonial, index) => (
            <div key={index} className="shrink-0 w-[380px] mx-3">
              <FlashlightCard>
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-sm">{`"${testimonial.quote}"`}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover bg-secondary"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="px-2 py-1 rounded bg-accent/10 text-accent text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </FlashlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
