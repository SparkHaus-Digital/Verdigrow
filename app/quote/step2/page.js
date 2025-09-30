"use client";
import QuoteForm from "@/components/QuoteForm";
import { useQuote } from "@/app/quote/QuoteContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function QuoteStep2() {
  const router = useRouter();
  const { formData, updateFormData } = useQuote();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      product: formData.product || "",
      quantity: formData.quantity || "",
      notes: formData.notes || "",
    },
  });

  // Watch all fields
  const watchedFields = watch();

  useEffect(() => {
    // Only update context if values are different
    const hasChanged = Object.keys(watchedFields).some(
      key => watchedFields[key] !== formData[key]
    );

    if (hasChanged) {
      updateFormData(watchedFields);
    }
  }, [watchedFields, formData, updateFormData]);


  // Reset form values whenever formData changes
  useEffect(() => {
    reset({
      product: formData.product || "",
      quantity: formData.quantity || "",
      notes: formData.notes || "",
    });
  }, [formData, reset]);

  const onSubmit = (data) => {
    updateFormData(data); // save to context
    router.push("/quote/step3");
  };

  return (
    <QuoteForm step={2}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Product */}
        <div>
          <label className="block text-sm mb-1">PRODUCT NAME</label>
          <select
            {...register("product", { required: "Product is required" })}
            className={`w-full p-2 border rounded ${errors.product ? "border-red-500" : "border-gray-800"
              }`}
          >
            <option value="" disabled>
              Select a product
            </option>
            <option value="Cocopeat Grow Bags">Cocopeat Grow Bags</option>
            <option value="Private Label - Retail">Private Label - Retail</option>
          </select>
          {errors.product && (
            <p className="text-red-500 text-sm mt-1">{errors.product.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm mb-1">QUANTITY</label>
          <input
            type="text"
            {...register("quantity", { required: "Quantity is required" })}
            className={`w-full p-2 border rounded ${errors.quantity ? "border-red-500" : "border-gray-800"
              }`}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm mb-1">ADDITIONAL NOTES</label>
          <input
            type="text"
            {...register("notes")}
            className="w-full p-2 border rounded border-gray-800"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-2 rounded-md"
          >
            Next Section
          </button>
          <button
            type="button"
            onClick={() => router.push("/quote")}
            className="w-full bg-primary text-white px-6 py-2 rounded-md"
          >
            Back
          </button>
        </div>
      </form>
    </QuoteForm>
  );
}
