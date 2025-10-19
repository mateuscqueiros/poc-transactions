"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StepControls } from "./step-controls";
import {
  ConfirmReceiverStep,
  InputKeyStep,
  KeyTypeStep,
  TypeValueStep,
} from "./steps";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "../../../../components/animations/motion-div";

export type BasicPixFormType = {
  keyType: string;
  key: string;
  amount: number;
};

export type BasicPixFormProps = {
  onSubmitAction: (values: BasicPixFormType) => void;
};

const steps = [
  {
    id: "key-type-step",
    fields: ["keyType"],
    component: <KeyTypeStep />,
  },
  {
    id: "input-key-step",
    fields: ["key"],
    component: <InputKeyStep />,
  },
  {
    id: "type-value-step",
    fields: ["amount"],
    component: <TypeValueStep />,
  },
  {
    id: "confirm-receiver-step",
    fields: [],
    component: <ConfirmReceiverStep />,
  },
];

export function BasicPixForm({ onSubmitAction }: BasicPixFormProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [animationDirection, setAnimationDirection] = useState<"next" | "prev">(
    "next",
  );

  const methods = useForm<BasicPixFormType>({
    defaultValues: {
      keyType: "",
      key: "",
      amount: 0,
    },
    mode: "onBlur",
  });

  const prevStep = () => {
    setAnimationDirection("prev");
    setActiveStep((s) => s - 1);
  };
  const nextStep = async () => {
    setAnimationDirection("next");
    const fieldsToValidate = steps[activeStep - 1]
      .fields as (keyof BasicPixFormType)[];

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
              activeStep === index + 1 && (
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
