import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "brand" | "neutral" | "dark" | "success";
  className?: string;
}

export function Badge({
  children,
  icon,
  variant = "brand",
  className,
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-brand-50 border-brand-100 text-brand-600",
    neutral: "bg-slate-100 border-border2 text-slate2",
    dark: "bg-white/10 border-white/20 text-white",
    success: "bg-emerald-50 border-emerald-200 text-emerald-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
