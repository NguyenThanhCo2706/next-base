"use client";

import { useState } from "react";

import Form1 from "@/src/app/users/components/form/Form1";
import Form2 from "@/src/app/users/components/form/Form2";
import Form3 from "@/src/app/users/components/form/Form3";
import Form4 from "@/src/app/users/components/form/Form4";
import Form5 from "@/src/app/users/components/form/Form5";

import ProgressBar from "@/src/app/users/components/ProgressBar";
import StepIndicators from "@/src/app/users/components/StepIndicators";

export default function FormRegisterUser() {
  const [step, setStep] = useState(1);

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <Form1 setStep={setStep} />;
      case 2:
        return <Form2 setStep={setStep} />;
      case 3:
        return <Form3 setStep={setStep} />;
      case 4:
        return <Form4 setStep={setStep} />;
      case 5:
        return <Form5 setStep={setStep} />;
    }
  };

  return (
    <div>
      <ProgressBar step={step} />

      <StepIndicators step={step} setStep={setStep} />

      {renderFormStep()}
    </div>
  );
}
