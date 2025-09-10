"use client";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";

export default function QuoteStep1() {
  return (
    <div className="p-6 mx-20 mt-30">
      <h1 className="text-3xl font-bold mb-4">Get a Quote</h1>
      <p className="mb-6">
        Fill out the form below to receive a personalized quote for our cocopeat products. 
        Our team will review your information and get back to you promptly.
      </p>

      <ProgressBar step={1} />

      <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Info</h2>

      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Company Name" className="w-full p-2 border rounded" />

        <div className="flex justify-end">
          <Link href="/quote/step2" className="bg-blue-600 text-white px-4 py-2 rounded">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
}
