"use client";

import ProgressBar from "@/components/ProgressBar";
import { motion } from "framer-motion";

export default function QuoteForm({ step, children }) {
  return (
    <div className="mb-20">
      {/* Header */}
      <div className="bg-primary text-center py-10 text-white rounded-b-3xl">
        <motion.h1 initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }} className="font-sohne font-bold text-2xl md:text-4xl mb-5 mt-20">
          GET A QUOTE
        </motion.h1>
        <p className="italic max-w-xl mx-auto">
          Request a customized quote for our eco-friendly cocopeat. Share your details, and our team will respond with pricing and delivery options.
        </p>
      </div>

      {/* Progress Bar */}
      <ProgressBar step={step} />

      {/* Step Content */}
      <div className="mx-auto max-w-3xl p-6">{children}</div>
    </div>
  );
}
