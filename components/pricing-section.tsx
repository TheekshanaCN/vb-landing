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
      className="relative py-32 px-6 bg-[#faf7f2]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-warm-cream/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-warm-beige/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-warm-tan/10 border border-warm-tan/20 text-warm-tan text-sm font-medium mb-6 transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            Pricing
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            Pay as you grow
            <br />
            <span className="italic text-muted-foreground">credit system</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg text-muted-foreground transition-all duration-700 delay-400 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            No subscriptions. No hidden fees. Buy credits and use them whenever you need to build your unicorn.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
                  }`}
                style={{
                  transitionDelay: `${index * 150 + 600}ms`,
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-warm-tan text-white text-xs font-bold uppercase tracking-widest shadow-lg z-20">
                    Most Popular
                  </div>
                )}

                <FlashlightCard
                  className={`h-full ${plan.popular ? "border-warm-tan/50 shadow-2xl shadow-warm-tan/10 scale-105 z-10" : "border-stone-200"}`}
                >
                  <div className="p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-warm-tan/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-warm-tan" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl text-foreground mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-serif text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground">/ {plan.credits} {plan.unit}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-warm-tan flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-stone-500 font-medium tracking-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <AnimatedButton className="w-full justify-center" variant={plan.popular ? "primary" : "secondary"}>
                      {plan.cta}
                    </AnimatedButton>
                  </div>
                </FlashlightCard>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-1200 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
        >
          <p className="text-muted-foreground mb-4">All plans include 14-day money-back guarantee</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-warm-tan" />
              <span className="text-sm text-stone-500 font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-warm-tan" />
              <span className="text-sm text-stone-500 font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-warm-tan" />
              <span className="text-sm text-stone-500 font-medium">Instant access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
