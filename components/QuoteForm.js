// components/QuoteLayout.jsx
"use client";
import ProgressBar from "@/components/ProgressBar";

export default function QuoteForm({ step, children }) {
  return (
    <div className="mb-20">
      {/* Green Rectangle Section */}
      <div className="bg-primary text-center py-10 text-white rounded-b-3xl">
        <h1 className="font-sohne font-bold text-4xl mb-5 mt-20">GET A QUOTE</h1>
        <p className="italic max-w-xl mx-auto">
          Request a customized quote for our eco-friendly cocopeat. 
          Share your details, and our team will respond with pricing and delivery options.
        </p>
      </div>

      {/* Progress Bar */}
      <ProgressBar step={step} />

      {/* Step Content */}
      <div className="mx-auto max-w-3xl p-6">{children}</div>
    </div>
  );
}
