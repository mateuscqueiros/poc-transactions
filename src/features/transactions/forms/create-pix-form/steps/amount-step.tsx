"use client";

import { useFormContext } from "react-hook-form";
import { CurrencyInput } from "../../../../../components/forms/inputs/currency-input";
import { Textarea } from "@mantine/core";

export function AmountStep() {
  const {
    watch,
    setValue,
    formState: { errors },
    register,
  } = useFormContext<any>();
  const amount = watch("amount");
  const description = watch("description");

  register("amount", {
    required: "O valor é obrigatório",
    min: { value: 0.01, message: "O valor mínimo é R$ 0,01" },
  });

  register("description");

  return (
    <>
      <CurrencyInput
        label="Valor"
        leftSection="R$"
        placeholder="0,00"
        value={amount ?? ""}
        size="md"
        onChange={(val) => setValue("amount", val, { shouldValidate: true })}
        error={
          typeof errors.amount?.message === "string"
            ? errors.amount.message
            : undefined
        }
      />

      <Textarea
        label="Descrição"
        placeholder="Opcional"
        value={description ?? ""}
        onChange={(e) => setValue("description", e.currentTarget.value)}
      />
    </>
  );
}
