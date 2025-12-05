"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How does IdeaForge understand my messy ideas?",
    answer:
      "IdeaForge uses advanced AI language models trained on thousands of successful SaaS products. It analyzes your text for user needs, technical requirements, data flows, and business logic—then structures everything into a clear blueprint.",
  },
  {
    question: "Can I use the generated prompts with any AI coding tool?",
    answer:
      "Our prompts are optimized for v0, Cursor, Bolt, Lovable, and any other AI-powered development tool. We format them specifically for maximum clarity and actionability.",
  },
  {
    question: "What if my idea changes as I build?",
    answer:
      "That's expected! IdeaForge saves all versions of your blueprints. You can iterate on your idea, generate new maps, and compare different approaches. Your vision will evolve—we help you track it.",
  },
  {
    question: "Do I need technical knowledge to use IdeaForge?",
    answer:
      "Not at all. IdeaForge is built for non-technical founders. Just describe your idea in plain English. We handle the technical translation, architecture planning, and stack recommendations.",
  },
  {
    question: "How accurate are the tech stack recommendations?",
    answer:
      "Our AI considers your product requirements, scale expectations, budget, and timeline. We recommend modern, production-ready technologies with strong community support. You can always customize the suggestions.",
  },
  {
    question: "Can I export my blueprints?",
    answer:
      "Yes! Export visual maps as images, checklists as markdown, and prompts as text. Builder and Enterprise plans also support PDF exports with your branding.",
  },
]

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 transition-all duration-700 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            FAQ
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            Questions?
            <br />
            <span className="italic text-muted-foreground">We've got answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"}`}
              style={{
                transitionDelay: `${index * 100 + 400}ms`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:border-accent/30 transition-all duration-300 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-lg text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
