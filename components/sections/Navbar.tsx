"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { cn, TRANSITION_EASE } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_MENU_GROUPS = [
  {
    label: "Development",
    items: [
      { label: "E-commerce & Solutions", href: "/services/e-commerce-solutions" },
      { label: "Landing Pages", href: "/services/landing-pages" },
      { label: "Websites with CMS", href: "/services/websites-with-cms" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web App Development", href: "/services/web-development" },
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "IT Consulting & Strategy", href: "/contact" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "API & Backend Development", href: "/services/api-backend-development" },
      { label: "Maintenance & Support", href: "/services/maintenance-support" },
    ],
  },
  {
    label: "Design",
    items: [
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Logo & Colors", href: "/services/logo-colors" },
      { label: "Brand Identity", href: "/services/brand-identify"},
    ],
  },
  {
    label: "Digital Marketing",
    items: [
      { label: "Social Media", href: "/services/social-media" },
      { label: "SEO", href: "/services/seo" },
      { label: "Bulk Email", href: "/services/bulk-email" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
] as const;

function ServicesMenuContent({ mobile = false, onSelect }: { mobile?: boolean; onSelect?: () => void }) {
  return (
    <div className={cn("relative", mobile ? "p-1" : "p-3")}>
      <div className="relative z-10">
        <div className="flex items-center justify-between border-b border-border2/80 px-2 pb-2">
          <Link href="/services" onClick={onSelect} className="text-sm font-bold text-ink-950 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm">Services</Link>
          <Link href="/services" onClick={onSelect} className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate2 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm">
            Explore services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-4">
          {SERVICE_MENU_GROUPS.map((group) => (
            <section key={group.label} className="min-w-0">
              <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate2">{group.label}</p>
              <div className="grid gap-1">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onSelect}
                    className="group flex min-w-0 items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-[13px] font-semibold text-ink-950/80 transition-colors hover:bg-brand-50 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                  >
                    <span className="truncate">{item.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-slate2 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesPinned, setServicesPinned] = useState(false);
  const servicesMenuRef = useRef<HTMLElement>(null);
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
    setServicesOpen(false);
    setServicesPinned(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
        setServicesPinned(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setServicesPinned(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header
      ref={servicesMenuRef}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border2 shadow-sm py-0"
          : "bg-transparent py-2"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-1" aria-label="WIFRIT home">
          <Image
            src="/wifrit_black.png"
            alt="WIFRIT"
            width={240}
            height={100}
            className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-9 font-medium text-[15px] text-ink-950/80">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => {
                    if (!servicesPinned) setServicesOpen(false);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (servicesOpen && servicesPinned) {
                        setServicesPinned(false);
                        setServicesOpen(false);
                      } else {
                        setServicesPinned(true);
                        setServicesOpen(true);
                      }
                    }}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={cn(
                      "relative py-1 transition-colors hover:text-brand inline-flex items-center gap-1",
                      isActive ? "text-brand font-semibold" : "text-ink-950/80"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-brand rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: TRANSITION_EASE }}
                        className="nav-services-menu absolute z-50 max-h-[calc(100svh-6.25rem)] overflow-y-auto rounded-[1.25rem] border border-border2 bg-[#f7f9ff] shadow-2xl"
                      >
                        <ServicesMenuContent onSelect={() => { setServicesPinned(false); setServicesOpen(false); }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

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

                if (item.href === "/services") {
                  return (
                    <div key={item.href} className="border-b border-border2/70">
                      <button
                        type="button"
                        onClick={() => {
                          setServicesPinned(false);
                          setServicesOpen((open) => !open);
                        }}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        className={cn(
                          "w-full py-3 transition-colors flex items-center justify-between active:text-brand",
                          isActive ? "text-brand font-semibold" : "text-ink-950/80 hover:text-brand"
                        )}
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-3">
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand" />}
                          <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: TRANSITION_EASE }}
                            className="nav-services-mobile-scroll max-h-[60vh] overflow-y-auto px-1 pb-2 pt-3"
                          >
                            <ServicesMenuContent mobile onSelect={() => setMobileOpen(false)} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

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
