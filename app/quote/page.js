"use client";
import QuoteForm from "@/components/QuoteForm";
import { useQuote } from "@/app/quote/QuoteContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function QuoteStep1() {
  const router = useRouter();
  const { formData, updateFormData } = useQuote();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData, // prefill from context
  });

  const onSubmit = (data) => {
    updateFormData(data); // save to context
    router.push("/quote/step2");
  };

  return (
    <QuoteForm step={1}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-open">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm mb-1">FIRST NAME</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className={`w-full p-2 border rounded ${errors.firstName ? "border-red-500" : "border-gray-800"
                }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-1">LAST NAME</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className={`w-full p-2 border rounded ${errors.lastName ? "border-red-500" : "border-gray-800"
                }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>


        {/* Email */}
        <div>
          <label className="block text-sm mb-1">EMAIL</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-800"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm mb-1">MOBILE PHONE <span className="italic">( WHATSAPP PREFERRED )</span></label>
          <input
            type="text"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{7,15}$/,
                message: "Enter a valid phone number",
              },
            })}
            className={`w-full p-2 border rounded ${errors.phoneNumber ? "border-red-500" : "border-gray-800"
              }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>


        {/* Company */}
        <div>
          <label className="block text-sm mb-1">COMPANY NAME</label>
          <input
            type="text"
            {...register("companyName")}
            className="w-full p-2 border rounded border-gray-800"
          />
        </div>

        {/* Next Button */}
        <div>
          <button
            type="submit"
            className="block w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Next Section
          </button>
        </div>
      </form>
    </QuoteForm>
  );
}
