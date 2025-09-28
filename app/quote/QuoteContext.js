"use client";
import { createContext, useContext, useState } from "react";

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [formData, setFormData] = useState({});

  const updateFormData = (values) => {
    setFormData((prev) => ({ ...prev, ...values }));
  };

  return (
    <QuoteContext.Provider value={{ formData, updateFormData }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}
