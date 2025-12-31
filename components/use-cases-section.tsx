"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Terminal, Sparkles, Briefcase, ArrowRight } from "lucide-react"

const useCases = [
    {
        title: "For Developers & Freelancers",
        description: "Skip the tedious planning phase. Generate instant architectural blueprints and tech stacks so you can jump straight to coding.",
        icon: Terminal,
        tags: ["Architecture", "Schema", "API Docs"],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "For Vibe Coders",
        description: "Turn your creative sparks into concrete plans. Get a clear roadmap for your passion project without getting bogged down in technical decisions.",
        icon: Sparkles,
        tags: ["Rapid Prototyping", "Stack Selection", "MVP Steps"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "For Founders & Visionaries",
        description: "Validate your idea instantly. Get professional-grade documentation and roadmaps to showcase your vision to investors and partners.",
        icon: Briefcase,
        tags: ["Investor Ready", "Market Analysis", "Feature Scope"],
        gradient: "from-amber-500/20 to-orange-500/20",
    },
]

export function UseCasesSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { threshold: 0.1 })

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 px-4 md:px-6 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
                        Built for every <br />
                        <span className="text-white/40 italic">stage of creation.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon
                        return (
                            <div
                                key={index}
                                className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none`}
                                />

                                <div className="relative z-10">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-tight">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-white/50 mb-6 md:mb-8 leading-relaxed text-xs md:text-sm">
                                        {useCase.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {useCase.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] uppercase font-bold text-white/40 tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
                                        <span>Start Planning</span>
                                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
