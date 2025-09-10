"use client";

export default function ProgressBar({ step }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((num, index) => (
        <div key={num} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
              ${step >= num ? "bg-secondary border-secondary text-white" : "bg-white border-primary text-primary"}
            `}
          >
            {num}
          </div>
          {index < 2 && (
            <div
              className={`h-1 w-16 ${
                step > num ? "bg-secondary" : "bg-primary"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
