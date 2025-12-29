"use client";

import {
  Workflow,
  Cpu,
  Layers,
  Sparkles,
  Layout,
  Zap,
} from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="relative py-24 md:py-32 px-4 md:px-6 bg-background overflow-hidden selection:bg-white selection:text-black">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-white/[0.02] rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-32 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] md:text-xs font-medium uppercase tracking-widest">
            <Cpu className="w-3 h-3" />
            <span>Integrated Architecture</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] px-4">
            Everything you need <br />
            <span className="text-white/30">to build with precision.</span>
          </h2>

          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto px-4">
            Bridge the gap between vision and production. IdeaForge provides the structural foundation for your next SaaS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Visual Blueprint */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white flex items-center justify-center">
                  <Workflow className="w-5 h-5 md:w-6 md:h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Visual Blueprint</h3>
                  <p className="text-xs md:text-sm text-white/40">Architectural flow of your entire app.</p>
                </div>
              </div>

              <div className="flex-1 min-h-[250px] md:min-h-[300px] rounded-2xl bg-black/40 border border-white/5 overflow-hidden p-4 md:p-6 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="space-y-8 w-full max-w-xs">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-white/80 text-center text-xs">Auth Module</div>
                    <div className="flex justify-between gap-4">
                      <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 text-white/40 text-center text-[10px]">Data Store</div>
                      <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 text-white/40 text-center text-[10px]">API Gateway</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-white/40 text-center text-[10px]">AI Integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Tech Stack */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-500">
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Curated Stack</h3>
              <p className="text-xs md:text-sm text-white/40 mb-8">Optimal tools for your specific idea.</p>

              <div className="space-y-3 md:space-y-4">
                {['Next.js 15', 'Tailwind CSS', 'Supabase', 'OpenAI'].map((tech) => (
                  <div key={tech} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[11px] md:text-xs text-white/60">{tech}</span>
                    <Sparkles className="w-3 h-3 text-white/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: MVP Roadmap */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-500">
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                <Layout className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">MVP Roadmap</h3>
              <p className="text-xs md:text-sm text-white/40 mb-8">Strategic path to your first launch.</p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <div className="text-[11px] md:text-xs text-white font-medium">Core Logic Implementation</div>
                    <div className="text-[9px] md:text-[10px] text-white/30">Build the engine first.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <div className="text-[11px] md:text-xs text-white/40 font-medium">UI Construction</div>
                    <div className="text-[9px] md:text-[10px] text-white/20">Focus on UX.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Vibe Prompt */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-500">
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
              <div className="flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Vibe Prompt Export</h3>
                <p className="text-xs md:text-sm text-white/40">Ready-to-use precision prompts for Cursor, Bolt, or v0.</p>
              </div>
              <div className="flex-1 w-full p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[9px] md:text-[10px] text-white/30 leading-relaxed overflow-hidden">
                &quot;Act as a senior software engineer... Build a SaaS using Next.js 15 following the integrated map: Auth {"->"} Supabase, Logic {"->"} Edge Functions...&quot;
                <div className="mt-4 flex justify-end">
                  <div className="px-3 py-1.5 rounded-lg bg-white text-black font-bold text-[10px]">COPY PROMPT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
