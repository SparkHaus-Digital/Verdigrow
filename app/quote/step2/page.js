"use client";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";

export default function QuoteStep2() {
  return (
    <div className="p-6 mx-20  mt-30">
      <h1 className="text-3xl font-bold mb-4">Get a Quote</h1>

      <ProgressBar step={2} />

      <h2 className="text-2xl font-semibold mb-4">Step 2: Product Details</h2>

      <form className="space-y-4">
        <input type="text" placeholder="Product Type" className="w-full p-2 border rounded" />
        <input type="number" placeholder="Quantity (in tons)" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Delivery Location" className="w-full p-2 border rounded" />

        <div className="flex justify-between">
          <Link href="/quote" className="bg-gray-400 text-white px-4 py-2 rounded">
            Back
          </Link>
          <Link href="/quote/step3" className="bg-blue-600 text-white px-4 py-2 rounded">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
}
