"use client";

import React, { useState } from "react";
import { Linkedin, Twitter, Link as LinkIcon, Check } from "lucide-react";

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Share on LinkedIn"
        className="w-9 h-9 rounded-xl border border-border2 flex items-center justify-center text-slate2 hover:text-brand hover:bg-brand-50 transition-colors"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Twitter"
        className="w-9 h-9 rounded-xl border border-border2 flex items-center justify-center text-slate2 hover:text-brand hover:bg-brand-50 transition-colors"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <button
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy link"}
        className="w-9 h-9 rounded-xl border border-border2 flex items-center justify-center text-slate2 hover:text-brand hover:bg-brand-50 transition-colors"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
