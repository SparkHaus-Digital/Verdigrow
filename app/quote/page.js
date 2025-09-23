// app/quote/step1/page.jsx
"use client";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";

export default function QuoteStep1() {
  return (
    <QuoteForm step={1}>
      <h2 className="text-2xl font-sans font-extrabold mb-6 text-primary">
        CONTACT INFORMATION
      </h2>

      <form className="space-y-6 uppercase">
        {/* First + Last Name  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Phone <span className="text-gray-500 italic">(WhatsApp preferred)</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Next Button */}
        <div>
          <Link
            href="/quote/step2"
            className="block bg-primary text-white text-center px-6 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Next Section
          </Link>
        </div>
      </form>
    </QuoteForm>
  );
}
