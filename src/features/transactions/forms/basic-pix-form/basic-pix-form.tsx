"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StepControls } from "./step-controls";
import {
  ConfirmReceiverStep,
  InputKeyStep,
  KeyTypeStep,
  ReviewStep,
  TypeValueStep,
} from "./steps";
import axios from "axios";

export type BasicPixFormType = {
  keyType: string;
  key: string;
  receiverName: string;
  amount: number;
};

export function BasicPixForm() {
  const [activeStep, setActiveStep] = useState(1);

  const methods = useForm<BasicPixFormType>({
    defaultValues: {
      keyType: "",
      key: "",
      receiverName: "",
      amount: 0,
    },
    mode: "onBlur",
  });

  const steps = [
    {
      fields: ["keyType"],
      component: <KeyTypeStep />,
    },
    {
      fields: ["key"],
      component: <InputKeyStep />,
    },
    {
      fields: ["amount"],
      component: <TypeValueStep />,
    },
    {
      fields: ["receiverName"],
      component: <ConfirmReceiverStep />,
    },
  ];

  const prevStep = () => setActiveStep((s) => s - 1);
  const nextStep = async () => {
    const fieldsToValidate = steps[activeStep - 1]
      .fields as (keyof BasicPixFormType)[];

    const isValid = await methods.trigger(fieldsToValidate);
    if (!isValid) return;
    setActiveStep((s) => s + 1);
  };

  const onSubmit = async ({ key, keyType, amount }: BasicPixFormType) => {
    try {
      const response = await axios.post("/api/transfer", {
        key,
        keyType,
        amount,
      });
      console.log(response.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 400,
        }}
      >
        <div>
          {steps.map(
            ({ component }, index) =>
              activeStep === index + 1 && <div key={index}>{component}</div>,
          )}
        </div>

        <StepControls
          active={activeStep}
          total={steps.length}
          onNext={nextStep}
          onPrev={prevStep}
        />
      </form>
    </FormProvider>
  );
}
