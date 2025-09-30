"use client";

import { Dispatch, SetStateAction } from "react";

export default function StepIndicators({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-50">
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          className={`step-indicator w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm hover:cursor-pointer ${
            num === step ? "text-white active" : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => setStep(num)}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
