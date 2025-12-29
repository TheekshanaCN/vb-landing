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
    <section id="testimonials" className="relative py-32 px-6 bg-[#faf7f2] overflow-hidden font-sans">
      {/* Brand Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-cream/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-warm-beige/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Technical Header - Integrated Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-warm-tan/10 border border-warm-tan/20 rounded-full text-[10px] font-mono text-warm-tan flex items-center gap-2 font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-tan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-warm-tan"></span>
                </span>
                Engineering Logs
              </div>
              <div className="h-px w-12 bg-warm-tan/20 hidden md:block" />
              <div className="text-stone-400 font-mono text-[10px] uppercase tracking-[0.2em] font-medium">Build v2.4.0_Stable</div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
              Trusted by <span className="italic text-warm-tan">architects.</span><br />
              <span className="text-3xl md:text-5xl text-stone-500 font-sans tracking-tight">Built for the modern web.</span>
            </h2>
          </div>
          <div className="hidden lg:block">
            <div className="p-8 bg-white/60 border border-warm-tan/20 rounded-[2rem] shadow-sm backdrop-blur-sm group hover:border-warm-tan/40 transition-colors">
              <div className="text-4xl font-serif text-stone-900 mb-1">2.4k+</div>
              <div className="text-stone-500 font-mono text-[10px] uppercase tracking-widest font-bold">Node Deployments</div>
            </div>
          </div>
        </div>

        {/* Bento Grid layout - Theme Aligned */}
        <div className="grid grid-cols-12 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${t.size} group relative bg-white border border-stone-200 p-8 md:p-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-warm-tan/5 hover:border-warm-tan/30 transition-all duration-700 flex flex-col justify-between min-h-[350px]`}
            >
              <div className="space-y-8">
                {/* Technical Card Metadata */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-warm-tan/5 flex items-center justify-center border border-warm-tan/10">
                    <Code2 className="w-5 h-5 text-warm-tan" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-stone-50 rounded-full border border-stone-100 italic">
                    <span className="text-[10px] font-mono text-stone-500 font-bold">{t.metric}</span>
                    <CheckCircle2 size={12} className="text-warm-tan" />
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-stone-800 font-serif leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="mt-8">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6 pt-8 border-t border-stone-100">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-white shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 bg-warm-tan rounded-lg text-white shadow-lg">
                      <Terminal size={10} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-stone-900 font-bold text-base tracking-tight">{t.author}</h4>
                      <Globe size={14} className="text-stone-400" />
                    </div>
                    <p className="text-warm-tan font-mono text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>

                {/* Technical Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-md bg-stone-50 border border-stone-200 text-[10px] font-mono text-stone-500 uppercase tracking-tighter">
                      {t.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Github size={16} className="text-stone-900" />
                    <span className="text-[11px] font-mono text-stone-600 font-medium">/{t.github}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Partner Proof - Theme Aligned */}
        <div className="mt-20 pt-12 border-t border-warm-tan/20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <div className="text-warm-tan font-mono text-[10px] uppercase tracking-[0.3em] font-black">Authorized Logic Partner</div>
          </div>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            <span className="text-2xl font-black text-stone-900 tracking-tighter">VERCEL</span>
            <span className="text-2xl font-black text-stone-900 tracking-tighter">SUPABASE</span>
            <span className="text-2xl font-black text-stone-900 tracking-tighter">RAILWAY</span>
            <span className="text-2xl font-black text-stone-900 tracking-tighter">GO.DEV</span>
          </div>
        </div>
      </div>
    </section>
  )
}
