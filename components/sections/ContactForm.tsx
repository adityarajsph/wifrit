"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { TRANSITION_EASE } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().min(1, "Please select a budget range."),
  message: z.string().min(10, "Please tell us a bit about your project (at least 10 characters)."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "Custom Software Development",
      budget: "$10k – $50k",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      // Simulate real asynchronous submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-border2 rounded-3xl p-6 sm:p-10 space-y-6 bg-white shadow-xl shadow-slate-200/50"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="text-xs font-bold text-slate2 uppercase tracking-wide mb-1.5 block">
            Name *
          </label>
          <input
            id="cf-name"
            type="text"
            {...register("name")}
            placeholder="Jane Doe"
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-ink-950 bg-white placeholder:text-slate2/50 focus:outline-brand transition-colors ${
              errors.name ? "border-red-400 bg-red-50/20" : "border-border2"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1.5 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="cf-company" className="text-xs font-bold text-slate2 uppercase tracking-wide mb-1.5 block">
            Company
          </label>
          <input
            id="cf-company"
            type="text"
            {...register("company")}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl border border-border2 text-base sm:text-sm text-ink-950 bg-white placeholder:text-slate2/50 focus:outline-brand transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="text-xs font-bold text-slate2 uppercase tracking-wide mb-1.5 block">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            {...register("email")}
            placeholder="jane@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-ink-950 bg-white placeholder:text-slate2/50 focus:outline-brand transition-colors ${
              errors.email ? "border-red-400 bg-red-50/20" : "border-border2"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1.5 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className="text-xs font-bold text-slate2 uppercase tracking-wide mb-1.5 block">
            Phone
          </label>
          <input
            id="cf-phone"
            type="tel"
            {...register("phone")}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-border2 text-base sm:text-sm text-ink-950 bg-white placeholder:text-slate2/50 focus:outline-brand transition-colors"
          />
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="cf-service" className="text-xs font-bold text-slate2 uppercase tracking-wide mb-1.5 block">
            Service Required
          </label>
          <select
            id="cf-service"
            {...register("service")}
            className="w-full px-4 py-3 rounded-xl border border-border2 text-base sm:text-sm text-ink-950 bg-white focus:outline-brand transition-colors cursor-pointer"
          >
            <option>Custom Software Development</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>Cloud & DevOps</option>
            <option>AI & Automation</option>
            <option>Not sure yet</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="cf-budget" className="text-xs font-bold text-slate2 uppercase tracking-wide mb-1.5 block">
            Budget
          </label>
          <select
            id="cf-budget"
            {...register("budget")}
            className="w-full px-4 py-3 rounded-xl border border-border2 text-base sm:text-sm text-ink-950 bg-white focus:outline-brand transition-colors cursor-pointer"
          >
            <option>Under $10k</option>
            <option>$10k – $50k</option>
            <option>$50k – $150k</option>
            <option>$150k+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="text-xs font-bold text-slate2 uppercase tracking-wide mb-1.5 block">
          Message *
        </label>
        <textarea
          id="cf-message"
          rows={5}
          {...register("message")}
          placeholder="Briefly describe your objectives, timelines, and technical requirements..."
          className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-ink-950 bg-white placeholder:text-slate2/50 focus:outline-brand resize-none transition-colors ${
            errors.message ? "border-red-400 bg-red-50/20" : "border-border2"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1.5 font-medium flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-brand hover:bg-brand-700 shadow-md shadow-brand/20 transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Success Notification Banner */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: TRANSITION_EASE }}
            className="flex items-start gap-3 text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Message delivered successfully.</p>
              <p className="text-emerald-700 text-xs mt-0.5">
                Thanks — your message has been sent. We&apos;ll reply within one business day.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Notification Banner */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: TRANSITION_EASE }}
            className="flex items-center gap-2.5 text-sm font-medium text-red-800 bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm"
          >
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <span>Something went wrong. Please try again or email us directly at hello@wifrit.com.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
