"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StepControls } from "./step-controls";
import { AmountStep, ConfirmStep, KeyStep, KeyTypeStep } from "./steps";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "../../../../components/animations/motion-div";
import { TransactionFormType } from "../../types";

export type CreatePixFormProps = {
  onSubmitAction: (values: TransactionFormType) => void;
};

const steps = [
  { id: "key-type-step", fields: ["keyType"], component: <KeyTypeStep /> },
  { id: "key-step", fields: ["key"], component: <KeyStep /> },
  { id: "amount-step", fields: ["amount"], component: <AmountStep /> },
  { id: "confirm-step", fields: [], component: <ConfirmStep /> },
];

export function CreatePixForm({ onSubmitAction }: CreatePixFormProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<"next" | "prev">(
    "next",
  );

  const methods = useForm<TransactionFormType>({
    defaultValues: {
      keyType: null,
      key: "",
      amount: 0,
      description: "",
    },
    mode: "onBlur",
  });

  const prevStep = () => {
    setAnimationDirection("prev");
    setActiveStep((s) => s - 1);
  };

  const nextStep = async () => {
    setAnimationDirection("next");
    const fieldsToValidate = steps[activeStep]
      .fields as (keyof TransactionFormType)[];
    const isValid = await methods.trigger(fieldsToValidate);
    if (!isValid) return;
    setActiveStep((s) => s + 1);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          () => onSubmitAction && onSubmitAction(methods.getValues()),
        )}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 400,
        }}
      >
        <AnimatePresence
          mode="wait"
          initial={false}
          custom={animationDirection}
        >
          {steps.map(
            ({ component, id }, index) =>
              activeStep === index && (
                <MotionDiv
                  key={id}
                  motionKey={id}
                  direction={animationDirection}
                >
                  {component}
                </MotionDiv>
              ),
          )}
        </AnimatePresence>

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
