"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import QuoteForm from "@/components/QuoteForm";
import { useQuote } from "@/app/quote/QuoteContext";
import { sendEmail } from "@/app/utils/sendEmail";

import { FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function QuoteStep3() {
  const { formData, updateFormData } = useQuote();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      address1: formData.address1 || "",
      address2: formData.address2 || "",
      city: formData.city || "",
      state: formData.state || "",
      postalCode: formData.postalCode || "",
      country: formData.country || "",
    },
  });

  const watchedFields = watch();

  // Persist form changes to context
  useEffect(() => {
    const hasChanged = Object.keys(watchedFields).some(
      key => watchedFields[key] !== formData[key]
    );
    if (hasChanged) {
      updateFormData(watchedFields);
    }
  }, [watchedFields, formData, updateFormData]);

  const onSubmit = async (data) => {
    if (isSubmitting) return; // prevent double submission
    setIsSubmitting(true);
    setSubmissionMessage("Submitting your request...");

    updateFormData(data); // save current step data

    try {
      await sendEmail({ ...formData, ...data }); // merge previous steps + current
      setSubmissionMessage("Your quote request has been submitted successfully!");
      setShowSuccess(true);
    } catch (error) {
      setSubmissionMessage("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <QuoteForm step={3}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-open">
        {/* Address Line 1 */}
        <div>
          <label className="block text-sm mb-1">ADDRESS LINE 01</label>
          <input
            type="text"
            {...register("address1", { required: "Address Line 1 is required" })}
            className={`w-full p-2 border rounded ${errors.address1 ? "border-red-500" : "border-gray-800"}`}
          />
          {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1.message}</p>}
        </div>

        {/* Address Line 2 */}
        <div>
          <label className="block text-sm mb-1">ADDRESS LINE 02</label>
          <input
            type="text"
            {...register("address2")}
            className="w-full p-2 border rounded border-gray-800"
          />
        </div>

        {/* City + State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">CITY</label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className={`w-full p-2 border rounded ${errors.city ? "border-red-500" : "border-gray-800"}`}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">STATE / PROVINCE</label>
            <input
              type="text"
              {...register("state", { required: "State/Province is required" })}
              className={`w-full p-2 border rounded ${errors.state ? "border-red-500" : "border-gray-800"}`}
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
          </div>
        </div>

        {/* Postal Code + Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div>
            <label className="block text-sm mb-1">POSTAL CODE</label>
            <input
              type="text"
              {...register("postalCode", { required: "Postal Code is required" })}
              className={`w-full p-2 border rounded ${errors.postalCode ? "border-red-500" : "border-gray-800"}`}
            />
            {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">COUNTRY</label>
            <input
              type="text"
              {...register("country", { required: "Country is required" })}
              className={`w-full p-2 border rounded ${errors.country ? "border-red-500" : "border-gray-800"}`}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            type="submit"
            className={`w-full bg-primary text-white px-6 py-2 rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/quote/step2")}
            className="w-full bg-primary text-white px-6 py-2 rounded-md"
            disabled={isSubmitting}
          >
            Back
          </button>
        </div>
      </form>

      {/* Modal */}
      {showSuccess || isSubmitting ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-50">
          <div className="bg-white p-8 m-6 rounded-[20px] shadow-lg max-w-sm w-full text-center space-y-4 border border-primary font-open">

            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin text-primary text-5xl mx-auto mb-4" />
                <h2 className="text-xl font-bold text-primary">Submitting your form...</h2>
                <p className="text-sm text-primary">
                  Please wait while we process your request.
                </p>
              </>
            ) : (
              <>
                <FaCheckCircle className="text-secondary text-5xl mx-auto mb-6" />
                <h2 className="text-xl font-bold text-primary">THANK YOU!</h2>
                <p className="text-sm text-primary">
                  Your quote request has been submitted. We’ll email you your quotation within 24 hours.
                </p>
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={() => router.push("/")}
                    className="flex-1 bg-background text-primary px-6 py-2 rounded-[20px] hover:bg-primary/90 transition border border-primary"
                  >
                    HOME
                  </button>

                  <button
                    onClick={() => router.push("/contact")}
                    className="flex-1 bg-primary text-background px-6 py-2 rounded-[20px] hover:bg-gray-300 transition"
                  >
                    CONTACT
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      ) : null}

    </QuoteForm>
  );
}
