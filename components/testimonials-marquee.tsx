"use client"

import { motion } from "framer-motion"
import { Github, Globe, CheckCircle2, Terminal, Code2 } from "lucide-react"

const testimonials = [
  {
    quote: "The prompt engineering engine is remarkably precise. It cut our MVP ideation cycle from 2 weeks to 48 hours. The visual node mapping is a game-changer for architecture alignment.",
    author: "Alex Rivers",
    role: "Lead Engineer @ Vercel",
    tag: "Next.js 15 / AI Architecture",
    github: "arivers-dev",
    metric: "2.4x Faster Shipping",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    size: "col-span-12 md:col-span-7",
  },
  {
    quote: "Finally, a tool that understands the bridge between a 'vibe' and a 'build'. Blueprints that actually make sense to engineers.",
    author: "Jordan Smith",
    role: "Senior Fullstack",
    tag: "OSS Contributor",
    github: "jsmith-codes",
    metric: "Logic Verified",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    size: "col-span-12 md:col-span-5",
  },
  {
    quote: "The SVG node export documentation saved us weeks of manual diagramming. Essential for technical founders.",
    author: "Samantha Lee",
    role: "CTO @ Nexus",
    tag: "Go / Microservices",
    github: "sam-builds",
    metric: "Diagrams Automated",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    size: "col-span-12 md:col-span-5",
  },
  {
    quote: "IdeaForge transforms messy logic into production-ready prompts. It's the standard start for all our internal tools.",
    author: "Marcus Wright",
    role: "DX Engineer",
    tag: "TS / Infrastructure",
    github: "marcus-sys",
    metric: "Clean Prompt Output",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    size: "col-span-12 md:col-span-7",
  },
]

export function TestimonialsMarquee() {
  return (
    <section id="testimonials" className="relative py-32 px-6 bg-background overflow-hidden selection:bg-white selection:text-black">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest">
              Success Logs
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Trusted by <span className="text-white/30 italic">architects.</span>
            </h2>
          </div>
          <div className="hidden lg:block">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
              <div className="text-4xl font-bold text-white mb-1">2.5k+</div>
              <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Architectures Shipped</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${t.size} group relative bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between min-h-[350px] shadow-2xl shadow-black`}
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t.metric}</span>
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium italic">
                  &quot;{t.quote}&quot;
                </blockquote>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-xl object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">{t.author}</h4>
                    <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-20 group-hover:opacity-100 transition-all duration-500">
                  <Github className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-mono text-white">/{t.github}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
