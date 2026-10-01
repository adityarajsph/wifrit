"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn, TRANSITION_EASE } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer select-none text-center";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-brand text-white hover:bg-brand-700 shadow-[0_8px_24px_-10px_rgba(37,99,235,0.55)] hover:shadow-[0_14px_30px_-10px_rgba(37,99,235,0.65)]",
    secondary:
      "border border-border2 bg-white text-ink-950 hover:bg-ink-950 hover:text-white hover:border-ink-950",
    outline:
      "border border-brand text-brand hover:bg-brand-50",
    ghost:
      "text-ink-950/80 hover:text-ink-950 hover:bg-slate-100",
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: TRANSITION_EASE }}
        className="inline-block"
      >
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      </motion.div>
    );
  }

  const { onAnimationStart, onDragStart, onDragEnd, onDrag, ...buttonProps } = props;

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: TRANSITION_EASE }}
      className={combinedClassName}
      {...(buttonProps as HTMLMotionProps<"button">)}
    >
      {content}
    </motion.button>
  );
}
