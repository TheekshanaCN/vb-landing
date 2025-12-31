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
    <section ref={sectionRef} id="faq" className="relative py-24 md:py-32 px-4 md:px-6 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
            Knowledge Base
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Questions? <br />
            <span className="text-white/30 italic">We&apos;ve got answers.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base md:text-xl font-bold text-white tracking-tight leading-tight">{faq.question}</h3>
                  <div className={cn(
                    "w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300",
                    openIndex === index ? "bg-white text-black border-white" : "text-white/40"
                  )}>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        openIndex === index && "rotate-180",
                      )}
                    />
                  </div>
                </div>
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    openIndex === index ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl">{faq.answer}</p>
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
