"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn, TRANSITION_EASE } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border2 shadow-sm py-0"
          : "bg-transparent py-2"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="WIFRIT home">
          <span className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center relative overflow-hidden shadow-[0_4px_12px_rgba(37,99,235,0.35)] group-hover:scale-105 transition-transform">
            <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
            <span className="text-white font-display font-800 text-base relative">W</span>
          </span>
          <span className="font-display font-800 text-xl tracking-tight text-ink-950">
            WIFRIT
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-9 font-medium text-[15px] text-ink-950/80">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 transition-colors hover:text-brand",
                  isActive ? "text-brand font-semibold" : "text-ink-950/80"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: TRANSITION_EASE }}
          >
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand text-white shadow-[0_8px_24px_-10px_rgba(37,99,235,0.55)] hover:bg-brand-700 hover:shadow-[0_14px_30px_-10px_rgba(37,99,235,0.65)] transition-all inline-flex items-center gap-1.5"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 opacity-80" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-border2 text-ink-950 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: TRANSITION_EASE }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-border2 px-5 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-1 font-medium text-[15px]">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "py-3 border-b border-border2/70 transition-colors flex items-center justify-between active:text-brand",
                      isActive
                        ? "text-brand font-semibold"
                        : "text-ink-950/80 hover:text-brand"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-5 py-3 rounded-lg text-sm font-semibold bg-brand text-white text-center shadow-md hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 active:bg-brand-800"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
