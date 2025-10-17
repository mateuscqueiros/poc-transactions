"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button, Card, Group } from "@mantine/core";
import { KeyTypeStep } from "./steps/key-type-step";
import { InputKeyStep } from "./steps/input-key-step";
import { ConfirmReceiverStep } from "./steps/confirm-receiver";
import { TypeValueStep } from "./steps/type-value-step";
import { ReviewStep } from "./steps/review-step";

type PixData = {
  keyType: string;
  key: string;
  receiverName: string;
  amount: number;
};

export function BasicPixForm() {
  const [step, setStep] = useState(1);
  const methods = useForm<PixData>({
    defaultValues: {
      keyType: "",
      key: "",
      receiverName: "",
      amount: 0,
    },
  });

  const { handleSubmit, setValue } = methods;

  const nextStep = () => {
    setStep((s) => s + 1);
  };
  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = (data: PixData) => {
    console.log("PIX enviado:", data);
    alert("✅ PIX enviado com sucesso!");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* STEP 1 - Escolher tipo de chave */}
        {step === 1 && <KeyTypeStep />}

        {/* STEP 2 - Digitar chave */}
        {step === 2 && <InputKeyStep />}

        {/* STEP 3 - Confirmar destinatário */}
        {step === 3 && <ConfirmReceiverStep />}

        {/* STEP 4 - Valor */}
        {step === 4 && <TypeValueStep />}

        {/* STEP 5 - Resumo */}
        {step === 5 && <ReviewStep />}

        <Group justify="space-between" mt="md">
          <div>
            <Button type="button" disabled={step === 1} onClick={prevStep}>
              Voltar
            </Button>
          </div>

          <div>
            {step !== 5 && (
              <Button type="button" onClick={nextStep}>
                Continuar
              </Button>
            )}
            {step === 5 && <Button type="submit">Finalizar</Button>}
          </div>
        </Group>
      </form>
    </FormProvider>
  );
}
