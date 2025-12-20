"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Layers,
  GitBranch,
  Zap,
  Box,
  Sparkles,
  Database,
  Layout,
  Globe,
  Code2,
  Workflow,
  Bot,
  Terminal,
  ArrowRight,
  Cpu,
} from "lucide-react";

// --- Custom Components for Enhancements ---

const BorderBeam = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
      <div className="absolute inset-0 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)_inset]" />
      <motion.div
        className="absolute h-[1px] w-[30%] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px]"
        animate={{
          left: ["-30%", "100%"],
          top: ["0%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute h-[30%] w-[1px] bg-gradient-to-b from-transparent via-chart-2/50 to-transparent blur-[2px]"
        animate={{
          top: ["-30%", "100%"],
          right: ["0%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />
    </div>
  );
};

// --- Visual Components for Bento Cards ---

function VisualMapVisual() {
  const nodes = [
    { label: "User Journey", icon: Globe, color: "text-chart-1" },
    { label: "Core Functions", icon: Layout, color: "text-chart-2" },
    { label: "Data Output", icon: Database, color: "text-chart-3" },
    { label: "Internal Engine", icon: Cpu, color: "text-chart-4" },
    { label: "Automation & Logic", icon: Zap, color: "text-primary" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden group/visual">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      {/* Central Node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="relative z-10 w-20 h-20 rounded-3xl bg-primary shadow-[0_0_30px_rgba(44,44,44,0.3)] flex items-center justify-center border border-white/10"
      >
        <Sparkles className="w-10 h-10 text-primary-foreground animate-glow-pulse" />
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-primary"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Connection Lines with Animated Pulses */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute px-4 py-2 rounded-2xl bg-card border border-border/80 shadow-xl flex items-center gap-2 z-20"
          initial={{ opacity: 0, x: 0, y: 0 }}
          whileInView={{
            opacity: 1,
            x: Math.cos(((i * (360 / nodes.length)) * Math.PI) / 180) * 140,
            y: Math.sin(((i * (360 / nodes.length)) * Math.PI) / 180) * 140,
          }}
          transition={{ delay: i * 0.1, type: "spring", damping: 15 }}
        >
          <node.icon className={`w-4 h-4 ${node.color}`} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-700 whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}

      {/* Rotating Ring */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <motion.circle
          cx="50%" cy="50%" r="140"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          className="text-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function AIInsightsVisual() {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-center gap-6">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-chart-1 animate-pulse" />
        <span className="text-sm font-semibold text-primary tracking-widest uppercase italic">AI Intelligence Scanned</span>
      </div>
      <div className="space-y-5">
        {[
          { label: "Concept Integrity", score: 94, color: "bg-chart-1", icon: Zap },
          { label: "Logical Cohesion", score: 89, color: "bg-chart-2", icon: Layers },
          { label: "Optimal Flow", score: 96, color: "bg-chart-3", icon: Box }
        ].map((item, i) => (
          <motion.div
            key={item.label}
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-center text-xs font-bold text-muted-foreground/60 tracking-tighter">
              <span className="flex items-center gap-1.5 uppercase">
                <item.icon className="w-3 h-3" />
                {item.label}
              </span>
              <span className="text-primary font-mono">{item.score}%</span>
            </div>
            <div className="h-3 w-full bg-secondary/50 rounded-full overflow-hidden border border-border/10 p-[2px]">
              <motion.div
                className={`h-full ${item.color} rounded-full relative group-hover:brightness-110 shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.score}%` }}
                transition={{ duration: 1.5, ease: "circOut", delay: 0.5 + (i * 0.1) }}
              >
                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VibePromptVisual() {
  return (
    <div className="p-8 h-full flex flex-col justify-center items-center bg-stone-50/50 group/vibe">
      <div className="w-full relative">
        {/* Connection Lines (Aesthetic) */}
        <div className="absolute -top-12 -left-4 w-24 h-24 border-l-2 border-t-2 border-stone-200 rounded-tl-3xl opacity-50" />
        <div className="absolute -bottom-12 -right-4 w-24 h-24 border-r-2 border-b-2 border-stone-200 rounded-br-3xl opacity-50" />

        <div className="w-full bg-white rounded-[2.5rem] border border-stone-200 shadow-2xl overflow-hidden flex flex-col relative z-10 transition-transform duration-500 group-hover/vibe:-translate-y-2">
          {/* Header */}
          <div className="px-6 py-4 bg-stone-50/50 border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400/30" />
                <div className="w-2 h-2 rounded-full bg-amber-400/30" />
                <div className="w-2 h-2 rounded-full bg-emerald-400/30" />
              </div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">Prompt Engine</span>
            </div>
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
              <p className="text-[11px] text-stone-600 font-mono leading-relaxed relative z-10">
                <span className="text-primary">"Act as a React Expert...</span> Build a premium SaaS interface using <span className="text-stone-900 font-bold underline decoration-chart-1">Next.js 15</span> & <span className="text-stone-900 font-bold">Shadcn</span>. Integrate the <span className="italic text-chart-2 italic font-serif">Recursive Logic Engine</span> defined in our map..."
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="w-8 h-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center shadow-sm"
                  >
                    {i === 1 && <Cpu className="w-3.5 h-3.5 text-stone-400" />}
                    {i === 2 && <Box className="w-3.5 h-3.5 text-stone-400" />}
                    {i === 3 && <Layout className="w-3.5 h-3.5 text-stone-400" />}
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 h-10 bg-stone-900 text-white rounded-2xl text-[10px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-stone-200"
              >
                <Zap className="w-3 h-3 text-primary fill-primary" />
                COPY
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-2 px-3 py-1.5 bg-white border border-stone-200 rounded-full shadow-lg z-20 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-bold text-stone-600 uppercase tracking-tighter">Optimized</span>
        </motion.div>
      </div>
    </div>
  );
}

function StackRecommendationVisual() {
  const stack = [
    { name: "Next.js", icon: Globe, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "TypeScript", icon: Terminal, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Tailwind", icon: Layout, color: "text-cyan-500", bg: "bg-cyan-50" },
    { name: "Supabase", icon: Database, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Framer", icon: Zap, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "AI Engine", icon: Cpu, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  return (
    <div className="p-8 h-full grid grid-cols-2 gap-4 content-center bg-stone-50/50">
      {stack.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ delay: i * 0.05 }}
          className="bg-white border border-stone-200 rounded-2xl p-3 flex items-center gap-3 shadow-sm group/stack"
        >
          <div className={`w-8 h-8 rounded-xl ${item.bg} flex items-center justify-center transition-colors group-hover/stack:bg-white`}>
            <item.icon className={`w-4 h-4 ${item.color}`} />
          </div>
          <span className="text-[10px] font-bold text-stone-600 tracking-tight uppercase">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

function NextStepsVisual() {
  const steps = [
    { title: "Define Core Logic", status: "completed", desc: "Solidify the fundamental backend engine." },
    { title: "Architect Flow", status: "in-progress", desc: "Map data movement across components." },
    { title: "Vibe Implementation", status: "pending", desc: "Execute codebase with precision prompts." },
  ];

  return (
    <div className="p-8 h-full flex items-center justify-center bg-stone-50/50">
      <div className="w-full max-w-md space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-start gap-4"
          >
            {/* Connector line */}
            {i !== steps.length - 1 && (
              <div className="absolute left-[15px] top-8 w-px h-12 bg-stone-200" />
            )}

            <div className={`mt-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-sm shrink-0 bg-white
              ${step.status === 'completed' ? 'border-primary/30 text-primary' :
                step.status === 'in-progress' ? 'border-amber-400/30 text-amber-500 animate-pulse' :
                  'border-stone-200 text-stone-300'}`}
            >
              {step.status === 'completed' ? <Zap className="w-3.5 h-3.5 fill-current" /> :
                step.status === 'in-progress' ? <Sparkles className="w-3.5 h-3.5" /> :
                  <Box className="w-3.5 h-3.5" />}
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-tighter leading-none">{step.title}</h4>
              <p className="text-[10px] text-stone-500 leading-tight">{step.desc}</p>
            </div>

            {step.status === 'in-progress' && (
              <div className="ml-auto px-2 py-0.5 rounded-full bg-amber-50 border border-amber-100/50 text-[8px] font-bold text-amber-600 uppercase tracking-widest">
                Active
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    }
  },
};

// --- Bento Card Component ---

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  visual: React.ReactNode;
}

const BentoCard = ({ title, description, icon: Icon, className, visual }: BentoCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-white shadow-[0_8px_32px_-12px_rgba(44,44,44,0.08)] transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(44,44,44,0.12)] hover:-translate-y-1 flex flex-col p-8 ${className}`}
    >
      {/* Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
                  radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(212, 185, 153, 0.15),
                    transparent 80%
                  )
               `,
        }}
      />

      {/* Shimmer Border */}
      <BorderBeam />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full gap-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-6 h-6 text-stone-800" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-50 border border-stone-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-500">
            <ArrowRight className="w-4 h-4 text-stone-700" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h3 className="text-2xl font-serif text-stone-900 group-hover:text-stone-700 transition-colors uppercase tracking-tight">{title}</h3>
          <p className="text-base text-stone-500 leading-relaxed font-light">{description}</p>
        </div>

        {/* Visual */}
        <div className="flex-1 min-h-[220px] rounded-3xl bg-stone-50/50 border border-stone-100 overflow-hidden relative group-hover:ring-1 group-hover:ring-stone-200 transition-all duration-700">
          <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
            {visual}
          </div>
          {/* Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] noise mix-blend-overlay" />
    </motion.div>
  );
};

export function FeaturesGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 px-6 overflow-hidden bg-[#fdfaf6]">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-warm-cream/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-warm-beige/20 rounded-full blur-[120px] pointer-events-none" />
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-stone-200/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-stone-200/50 to-transparent" />
        <div className="absolute inset-0 bg-paper-texture opacity-[0.4]" />
      </motion.div>

      <motion.div
        style={{ scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-500 text-sm font-medium tracking-wide uppercase italic"
          >
            <Sparkles className="w-4 h-4 text-stone-800" />
            Engineered for Implementation
          </motion.div>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[1.1] tracking-tighter">
            Intelligence, <br />
            <span className="italic text-stone-400 font-light italic">Architected.</span>
          </h2>

          <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
            Bridge the gap between pure cognition and a scalable production codebase with our integrated architectural suite.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[minmax(420px,auto)]"
        >
          {/* 1. Visual Map (Large) */}
          <BentoCard
            title="Visual Blueprint"
            description="A comprehensive mapping of your user journey, core functions, data flow, and internal logic modules in one interactive space."
            icon={Workflow}
            className="lg:col-span-2 lg:row-span-2 min-h-[500px]"
            visual={<VisualMapVisual />}
          />

          {/* 2. AI Insights */}
          <BentoCard
            title="AI Insights"
            description="Direct analysis of your concept integrity and logical cohesion to identify architectural strengths and optimization areas."
            icon={Bot}
            className="lg:row-span-2"
            visual={<AIInsightsVisual />}
          />

          {/* 3. Tech Stack */}
          <BentoCard
            title="Stack Recommendation"
            description="Tailored technology suggestions intelligently selected based on your specific engine requirements."
            icon={Layers}
            visual={<StackRecommendationVisual />}
          />

          {/* 4. Next Steps */}
          <BentoCard
            title="Next Steps"
            description="A prioritized, linear protocol for phased execution, moving your project from abstraction towards production."
            icon={GitBranch}
            className="lg:col-span-2"
            visual={<NextStepsVisual />}
          />


          {/* 5. MVP Checklist (Wide) */}
          <BentoCard
            title="MVP Checklist"
            description="A pre-populated Kanban board tracking the essential tasks and logic required to launch your functional MVP."
            icon={Layout}
            className="lg:col-span-2"
            visual={<div className="p-8 h-full flex gap-4 overflow-hidden">
              {['To Do', 'Current', 'Done'].map(col => (
                <div key={col} className="flex-1 bg-stone-100/50 rounded-3xl p-4 flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{col}</span>
                  <div className="h-16 w-full bg-white rounded-2xl border border-stone-200 shadow-sm p-3">
                    <div className="h-2 w-full bg-stone-100 rounded mb-2" />
                    <div className="h-1.5 w-2/3 bg-stone-50 rounded" />
                  </div>
                </div>
              ))}
            </div>}
          />

          {/* 6. Vibe Prompt */}
          <BentoCard
            title="Vibe Coding Prompt"
            description="Bridge intent to implementation. Export a precision-engineered master prompt optimized for v0, Cursor, or Bolt to build your entire MVP in minutes."
            icon={Zap}
            visual={<VibePromptVisual />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
