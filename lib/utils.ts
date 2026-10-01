import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Standard cubic-bezier easing token requested for all animations:
 * cubic-bezier(0.16, 0.8, 0.24, 1)
 */
export const TRANSITION_EASE = [0.16, 0.8, 0.24, 1] as const;

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
