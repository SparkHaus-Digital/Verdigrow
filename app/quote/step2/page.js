// app/quote/step1/page.jsx
"use client";
import QuoteForm from "@/components/QuoteForm";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";

export default function QuoteStep2() {
  return (
    <QuoteForm step={2}>

      <h2 className="text-2xl font-sans font-extrabold mb-6 text-primary">
        ORDER INFORMATION
      </h2>

      <form className="space-y-6 uppercase">

        {/* ProductName */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <select
            className="w-full p-2 border rounded bg-background appearance-none"
          >
            <option value="" disabled>
              Select a product
            </option>
            <option value="product1">Cocopeat Grow Bags</option>
          </select>

          <span className="absolute right-3 top-9 pointer-events-none text-black">
            <FaChevronDown size={16} />
          </span>
        </div>

        {/* Estimated Quantity */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Quantity
          </label>
          <select
            className="w-full p-2 border rounded bg-background appearance-none"
          >
            <option value="" disabled>
              Select Quantity
            </option>
            <option value="quantity1">5 KG</option>
            <option value="quantity1">10 KG</option>
            <option value="quantity1">20 KG</option>
          </select>

          <span className="absolute right-3 top-9 pointer-events-none text-black">
            <FaChevronDown size={16} />
          </span>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ADDITIONAL NOTES <span className="italc text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Next Button */}
        <div>
          <Link
            href="/quote/step3"
            className="block bg-primary text-white text-center px-6 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Next Section
          </Link>
        </div>

        {/* Back Button */}
        <div>
          <Link
            href="/quote"
            className="block bg-primary text-white text-center px-6 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Back
          </Link>
        </div>
      </form>
    </QuoteForm>
  );
}
