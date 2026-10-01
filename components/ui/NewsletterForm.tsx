"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-xl px-5 py-3 text-sm">
        <CheckCircle2 className="w-4 h-4" />
        <span>Thank you for subscribing! Check your inbox soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 px-4 py-3 rounded-xl text-base sm:text-sm text-ink-950 bg-white placeholder:text-slate2 focus:outline-brand"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl text-sm font-semibold bg-brand hover:bg-brand-700 text-white shadow-md transition-colors cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
}
