"use client";

export default function ProgressBar({ step }) {
  return (
    <div className="flex items-center justify-center mb-8 mt-10">
      {[1, 2, 3].map((num, index) => (
        <div key={num} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
              ${step >= num ? "bg-secondary border-secondary text-white" : "bg-background border-secondary text-secondary"}
            `}
          >
            {num}
          </div>
          {index < 2 && (
            <div
              className={`h-0.5 w-24 ${
                step > num ? "bg-secondary" : "bg-secondary"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
