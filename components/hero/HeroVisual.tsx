"use client";

import React, { useState } from "react";
import {
  motion,
  MotionValue,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  CheckCircle2,
  Activity,
  Sparkles,
  Layers,
  Cpu,
  Zap,
  Globe,
  Cloud,
  Code2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { TRANSITION_EASE } from "@/lib/utils";

interface HeroVisualProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function HeroVisual({ mouseX, mouseY }: HeroVisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"architecture" | "metrics" | "code">("architecture");

  // Subtle 2.5D hardware-accelerated parallax for desktop (no preserve-3d SVG corruption on iOS)
  const containerX = useTransform(mouseX, [-1, 1], shouldReduceMotion ? [0, 0] : [-8, 8]);
  const containerY = useTransform(mouseY, [-1, 1], shouldReduceMotion ? [0, 0] : [-8, 8]);

  const floatCard1X = useTransform(mouseX, [-1, 1], shouldReduceMotion ? [0, 0] : [10, -10]);
  const floatCard1Y = useTransform(mouseY, [-1, 1], shouldReduceMotion ? [0, 0] : [8, -8]);

  const floatCard2X = useTransform(mouseX, [-1, 1], shouldReduceMotion ? [0, 0] : [-10, 10]);
  const floatCard2Y = useTransform(mouseY, [-1, 1], shouldReduceMotion ? [0, 0] : [-8, 8]);

  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[540px] mx-auto select-none">
      {/* Background Soft Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand/20 via-indigo-500/15 to-cyan-400/20 blur-2xl -z-10" />

      {/* Main Interactive Command Window */}
      <motion.div
        style={{
          x: containerX,
          y: containerY,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
        className="relative rounded-2xl bg-[#090D1A] border border-slate-700/70 shadow-[0_25px_60px_-15px_rgba(5,8,22,0.4)] overflow-hidden"
      >
        {/* Window Chrome / Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0D1527] border-b border-slate-800/90 text-xs">
          {/* macOS Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium hidden sm:inline">
              wifrit-core-system.tsx
            </span>
          </div>

          {/* Live Status Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-semibold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span>SYSTEM HEALTHY · 99.98%</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 px-4 pt-3 pb-2 border-b border-slate-800/80 bg-[#090D1A]">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "architecture"
                ? "bg-brand text-white shadow-sm font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab("metrics")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "metrics"
                ? "bg-brand text-white shadow-sm font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Telemetry</span>
          </button>

          <button
            onClick={() => setActiveTab("code")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "code"
                ? "bg-brand text-white shadow-sm font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Codebase</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="p-4 sm:p-6 min-h-[290px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeTab === "architecture" && (
              <motion.div
                key="arch"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: TRANSITION_EASE }}
                className="space-y-3"
              >
                {/* Architecture Layer 1: Client Edge */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group hover:border-brand/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Client Edge &amp; Web Apps</p>
                      <p className="text-[10px] text-slate-400 font-mono">Next.js 14 · React · Tailwind · SSR</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
                    14ms Edge
                  </span>
                </div>

                {/* Data Flow Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-indigo-500" />
                </div>

                {/* Architecture Layer 2: API & Microservices */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group hover:border-indigo-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Distributed Core Engine</p>
                      <p className="text-[10px] text-slate-400 font-mono">Node.js · Go · GraphQL · REST · gRPC</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-300 font-medium bg-indigo-500/10 px-2 py-0.5 rounded">
                    Zero-Trust
                  </span>
                </div>

                {/* Data Flow Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500 to-cyan-500" />
                </div>

                {/* Architecture Layer 3: Cloud & Persistence */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Cloud Infrastructure &amp; AI</p>
                      <p className="text-[10px] text-slate-400 font-mono">AWS · Docker · Kubernetes · PostgreSQL</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 font-medium bg-cyan-500/10 px-2 py-0.5 rounded">
                    Auto-Scale
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === "metrics" && (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: TRANSITION_EASE }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Availability SLA</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold font-mono text-white">99.98%</p>
                  <p className="text-[10px] text-emerald-400 mt-1 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Exceeding target</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Edge Response</span>
                    <Activity className="w-3.5 h-3.5 text-brand" />
                  </div>
                  <p className="text-2xl font-bold font-mono text-white">12ms</p>
                  <p className="text-[10px] text-emerald-400 mt-1 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Global CDN warm</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Security Audit</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xl font-bold font-mono text-white">0 Vulns</p>
                  <p className="text-[10px] text-slate-400 mt-1">SOC-2 Type II standards</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Throughput</span>
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <p className="text-xl font-bold font-mono text-white">5.8k/sec</p>
                  <p className="text-[10px] text-slate-400 mt-1">Peak auto-scaling</p>
                </div>
              </motion.div>
            )}

            {activeTab === "code" && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: TRANSITION_EASE }}
                className="font-mono text-xs leading-relaxed p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 overflow-x-auto"
              >
                <div className="text-slate-500">// Initialize WIFRIT Enterprise Cluster</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">app</span> ={" "}
                  <span className="text-yellow-400">createEnterpriseService</span>({`{`}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">framework:</span>{" "}
                  <span className="text-emerald-400">&quot;Next.js 14&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">architecture:</span>{" "}
                  <span className="text-emerald-400">&quot;Cloud-Native&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">security:</span>{" "}
                  <span className="text-emerald-400">&quot;Zero-Trust SOC-2&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">targetSLA:</span>{" "}
                  <span className="text-amber-400">0.9998</span>,
                </div>
                <div>{`}`});</div>
                <div className="mt-1 text-slate-400">
                  <span className="text-purple-400">await</span> app.
                  <span className="text-blue-400">deploy</span>({`{ `}
                  <span className="text-emerald-400">region: &quot;global&quot;</span>
                  {` }`});
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Window Footer */}
        <div className="px-5 py-2.5 bg-[#0D1527] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="font-mono">Deployment: wifrit-prod-v2.4.0</span>
          </div>
          <span className="text-slate-500 font-mono">Region: Global Edge</span>
        </div>
      </motion.div>

      {/* Floating Badge 1: Top Right - Latency Metric */}
      <motion.div
        style={{
          x: floatCard1X,
          y: floatCard1Y,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 z-20"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl px-4 py-2.5 shadow-[0_15px_30px_-8px_rgba(15,23,42,0.18)] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
            <Zap className="w-4 h-4 fill-emerald-500 text-emerald-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate2">Edge Latency</p>
            <p className="text-sm font-extrabold text-ink-950 font-mono">12ms Global</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 2: Bottom Left - Deployed SLA Badge */}
      <motion.div
        style={{
          x: floatCard2X,
          y: floatCard2Y,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 z-20"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl px-4 py-2.5 shadow-[0_15px_30px_-8px_rgba(15,23,42,0.18)] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-brand">
            <CheckCircle2 className="w-4 h-4 text-brand" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate2">High Availability</p>
            <p className="text-sm font-extrabold text-ink-950 font-mono">99.98% SLA</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
