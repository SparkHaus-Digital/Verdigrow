"use client";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";

export default function QuoteStep3() {
  return (
    <div className="p-6 mx-20 mt-30">
      <h1 className="text-3xl font-bold mb-4">Get a Quote</h1>

      <ProgressBar step={3} />

      <h2 className="text-2xl font-semibold mb-4">Step 3: Contact & Review</h2>

      <form className="space-y-4">
        <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded" />
        <textarea placeholder="Additional Notes" rows={4} className="w-full p-2 border rounded"></textarea>

        <div className="flex justify-between">
          <Link href="/quote/step2" className="bg-primary text-white px-4 py-2 rounded">
            Back
          </Link>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
