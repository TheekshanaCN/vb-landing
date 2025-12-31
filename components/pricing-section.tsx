"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { FlashlightCard } from "./flashlight-card"
import { AnimatedButton } from "./animated-button"
import { Check, Sparkles, Zap, Rocket } from "lucide-react"

const plans = [
  {
    name: "Explorer",
    icon: Sparkles,
    credits: "10",
    unit: "Credits",
    description: "Perfect for testing your first ideas",
    price: "Free",
    features: [
      "10 AI Credits included",
      "Visual node maps",
      "Basic tech recommendations",
      "MVP checklist",
      "Access to community",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Builder Pack",
    icon: Zap,
    credits: "100",
    unit: "Credits",
    description: "For serious founders building MVPs",
    price: "$29",
    features: [
      "100 AI Credits",
      "Advanced node maps with export",
      "AI-curated tech stacks",
      "Full MVP kanban boards",
      "Market insights & analysis",
      "Ready-to-build prompts",
      "Version history",
      "Priority support",
    ],
    cta: "Buy Credits",
    popular: true,
  },
  {
    name: "Elite Bundle",
    icon: Rocket,
    credits: "500",
    unit: "Credits",
    description: "Maximum power for power users",
    price: "$99",
    features: [
      "500 AI Credits",
      "Team collaboration (up to 10)",
      "White-label exports",
      "API access",
      "Custom AI training",
      "Dedicated success manager",
      "Advanced analytics",
      "SLA guarantee",
    ],
    cta: "Buy Bundle",
    popular: false,
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-24 md:py-32 px-4 md:px-6 bg-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-white/[0.02] rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
            Pricing
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Pay as you <br />
            <span className="text-white/30 italic">scale.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/50 px-4">
            No subscriptions. No hidden fees. Buy credits and use them whenever you need to build your SaaS.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className="relative group h-full flex flex-col p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest z-20">
                    Most Popular
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6 md:mb-8">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Header */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
                    <p className="text-xs md:text-sm text-white/40 mb-4 md:mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/20 text-xs md:text-sm">/ {plan.credits} {plan.unit}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-white/60 font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <AnimatedButton className={`w-full justify-center py-4 md:py-6 text-xs md:text-sm font-bold uppercase tracking-widest rounded-xl md:rounded-2xl ${plan.popular ? "bg-white text-black" : "bg-white/5 text-white hover:bg-white/10"}`}>
                    {plan.cta}
                  </AnimatedButton>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 md:mt-24 flex items-center justify-center gap-6 md:gap-12 flex-wrap opacity-40 px-4">
          {['No credit card required', 'Cancel anytime', 'Instant access'].map(info => (
            <div key={info} className="flex items-center gap-2">
              <Check className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">{info}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
