"use client";
import Link from "next/link";

export default function QuoteStep1() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Info</h2>
      {/* form elements */}
      <Link href="/quote/step2" className="bg-blue-600 text-white px-4 py-2 rounded">
        Next
      </Link>
    </div>
  );
}
