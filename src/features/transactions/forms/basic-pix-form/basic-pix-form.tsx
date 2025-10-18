"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { KeyTypeStep } from "./steps/key-type-step";
import { InputKeyStep } from "./steps/input-key-step";
import { ConfirmReceiverStep } from "./steps/confirm-receiver";
import { TypeValueStep } from "./steps/type-value-step";
import { ReviewStep } from "./steps/review-step";
import { StepControls } from "./step-controls";

export type BasicPixFormType = {
  keyType: string;
  key: string;
  receiverName: string;
  amount: number;
};

export function BasicPixForm() {
  const [step, setStep] = useState(1);
  const methods = useForm<BasicPixFormType>({
    defaultValues: {
      keyType: "",
      key: "",
      receiverName: "",
      amount: 0,
    },
  });

  const { handleSubmit } = methods;

  const fieldsPerStep: (keyof BasicPixFormType)[][] = [
    ["keyType"],
    ["key"],
    [],
    ["amount"],
    [],
  ];

  const prevStep = () => setStep((s) => s - 1);
  const nextStep = async () => {
    const fieldsToValidate = fieldsPerStep[step - 1];
    const isValid = await methods.trigger(fieldsToValidate);
    if (!isValid) return;
    setStep((s) => s + 1);
  };

  const onSubmit = (data: BasicPixFormType) => {
    console.log("PIX enviado:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <KeyTypeStep />}
        {step === 2 && <InputKeyStep />}
        {step === 3 && <ConfirmReceiverStep />}
        {step === 4 && <TypeValueStep />}
        {step === 5 && <ReviewStep />}

        <StepControls
          active={step}
          total={5}
          onNext={nextStep}
          onPrev={prevStep}
        />
      </form>
    </FormProvider>
  );
}
