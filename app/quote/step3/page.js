// app/quote/step1/page.jsx
"use client";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";

export default function QuoteStep3() {
  return (
    <QuoteForm step={3}>
      <h2 className="text-2xl font-sans font-extrabold mb-6 text-primary uppercase">
        Delivery Information
      </h2>

      <form className="space-y-6 uppercase">
        {/* Address Line 01 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Line 01
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Address Line 02 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ADRESS LINE 02 <span className="italic text-gray-500">(Optional)</span> 
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>

         {/* City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>

            {/* Province / State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Province / State
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

      {/* Postal Code */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <Link
            href="/quote"
            className="block bg-primary text-white text-center px-6 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Submit
          </Link>
        </div>

        <div>
          <Link
            href="/quote/step2"
            className="block bg-primary text-white text-center px-6 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Back
          </Link>
        </div>
      </form>
    </QuoteForm>
  );
}
