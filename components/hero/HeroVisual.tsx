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
  Layers,
  Activity,
  Globe,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cpu,
  Server,
  ArrowRight,
  GitBranch,
  Radio,
} from "lucide-react";
import { TRANSITION_EASE } from "@/lib/utils";

interface HeroVisualProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function HeroVisual({ mouseX, mouseY }: HeroVisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"overview" | "arch" | "telemetry">("overview");

  // Subtle 2.5D hardware-accelerated parallax for desktop
  const containerX = useTransform(mouseX, [-1, 1], shouldReduceMotion ? [0, 0] : [-6, 6]);
  const containerY = useTransform(mouseY, [-1, 1], shouldReduceMotion ? [0, 0] : [-6, 6]);

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Soft Ambient Background Glow */}
      <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-brand/15 via-blue-500/10 to-indigo-500/15 blur-2xl sm:blur-3xl -z-10" />

      {/* Main Interactive Product Chassis */}
      <motion.div
        style={{
          x: containerX,
          y: containerY,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="relative rounded-2xl bg-[#0B1120] border border-slate-800/90 shadow-[0_20px_50px_-15px_rgba(11,17,32,0.45)] overflow-hidden"
      >
        {/* Window Chrome / Titlebar */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-3 bg-[#0E1626] border-b border-slate-800/90 text-xs">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/60 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/60 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/60 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium hidden sm:inline">
              wifrit-core-system.tsx
            </span>
          </div>

          {/* Operational Status Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-semibold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span>SYSTEM HEALTHY · 99.98%</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 px-3 sm:px-4 pt-2.5 pb-2 border-b border-slate-800/80 bg-[#0B1120] overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-brand text-white shadow-sm font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab("arch")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "arch"
                ? "bg-brand text-white shadow-sm font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "telemetry"
                ? "bg-brand text-white shadow-sm font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Global Edge</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-4 sm:p-5 min-h-[310px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {/* Tab 1: System Overview */}
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: TRANSITION_EASE }}
                className="space-y-4"
              >
                {/* 3 Key Operational Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Edge Latency
                    </span>
                    <p className="text-xl font-bold font-mono text-white mt-0.5">11.8ms</p>
                    <p className="text-[10px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      Global P99 Fast
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Uptime SLA
                    </span>
                    <p className="text-xl font-bold font-mono text-white mt-0.5">99.98%</p>
                    <p className="text-[10px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Zero Incidents
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Compliance
                    </span>
                    <p className="text-xl font-bold font-mono text-white mt-0.5">SOC-2</p>
                    <p className="text-[10px] text-blue-400 font-medium mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-blue-400" />
                      Enterprise Ready
                    </p>
                  </div>
                </div>

                {/* Production Deployment Pipeline */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium mb-3">
                    <span className="flex items-center gap-1.5 text-white">
                      <GitBranch className="w-3.5 h-3.5 text-brand" />
                      <span>Continuous Delivery Pipeline</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      main · v2.4.1
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div>
                        <p className="text-white font-medium">Build</p>
                        <p className="text-[9px] text-slate-400">0 Errors</p>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div>
                        <p className="text-white font-medium">Test</p>
                        <p className="text-[9px] text-slate-400">100% Pass</p>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <div>
                        <p className="text-white font-medium">Deploy</p>
                        <p className="text-[9px] text-slate-400">34 PoPs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Architecture Topology */}
            {activeTab === "arch" && (
              <motion.div
                key="arch"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: TRANSITION_EASE }}
                className="space-y-2.5"
              >
                {/* Layer 1: Client Edge */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Client Edge &amp; Web Applications</p>
                      <p className="text-[10px] text-slate-400 font-mono">Next.js 14 · React 18 · TypeScript · Edge SSR</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    14ms TTFB
                  </span>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1">
                  <div className="w-px h-3 bg-slate-700" />
                </div>

                {/* Layer 2: API Gateway */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Distributed Core Engine</p>
                      <p className="text-[10px] text-slate-400 font-mono">Node.js · Go · GraphQL · REST · gRPC</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                    Zero-Trust
                  </span>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1">
                  <div className="w-px h-3 bg-slate-700" />
                </div>

                {/* Layer 3: Cloud & Persistence */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Cloud Infrastructure &amp; Persistence</p>
                      <p className="text-[10px] text-slate-400 font-mono">AWS · Docker · Kubernetes · PostgreSQL · Redis</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded">
                    Auto-Scale
                  </span>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Global Edge Network */}
            {activeTab === "telemetry" && (
              <motion.div
                key="telemetry"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: TRANSITION_EASE }}
                className="space-y-3 font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                      <span>US-EAST (VIRGINIA)</span>
                      <span className="text-emerald-400 font-bold">8ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div className="bg-emerald-400 h-full w-[94%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                      <span>EU-CENTRAL (FRANKFURT)</span>
                      <span className="text-emerald-400 font-bold">14ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div className="bg-emerald-400 h-full w-[88%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                      <span>AP-NORTHEAST (TOKYO)</span>
                      <span className="text-emerald-400 font-bold">19ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div className="bg-emerald-400 h-full w-[82%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                      <span>EDGE CACHE RATIO</span>
                      <span className="text-blue-400 font-bold">99.4%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div className="bg-blue-400 h-full w-[99%]" />
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Radio className="w-3.5 h-3.5 text-emerald-400" />
                    <span>34 Anycast Edge PoPs Online</span>
                  </span>
                  <span className="text-emerald-400 font-medium">All Healthy</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Console Footer */}
        <div className="px-4 py-2.5 bg-[#0E1626] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="truncate">Production Deployment · v2.4.1</span>
          </div>
          <span className="text-slate-400 hidden sm:inline">Global Edge Network</span>
        </div>
      </motion.div>

      {/* Tasteful Single Floating Proof Card (Hidden on smallest screens to prevent clipping) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-[0_15px_30px_-8px_rgba(15,23,42,0.14)]"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate2">
            High Availability
          </p>
          <p className="text-sm font-extrabold text-ink-950 font-mono">
            99.98% SLA Guaranteed
          </p>
        </div>
      </motion.div>
    </div>
  );
}
