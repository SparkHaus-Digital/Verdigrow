"use client";
import { QuoteProvider } from "@/app/quote/QuoteContext";

export default function QuoteLayout({ children }) {
  return <QuoteProvider>{children}</QuoteProvider>;
}
