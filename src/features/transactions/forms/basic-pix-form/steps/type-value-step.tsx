"use client";

import { useFormContext } from "react-hook-form";
import { CurrencyInput } from "../../../../../components/forms/inputs/currency-input";

export function TypeValueStep() {
  const {
    watch,
    setValue,
    formState: { errors },
    register,
  } = useFormContext<any>();
  const amount = watch("amount");

  register("amount", {
    required: "O valor é obrigatório",
    min: { value: 0.01, message: "O valor mínimo é R$ 0,01" },
  });

  return (
    <CurrencyInput
      label="Valor"
      leftSection="R$"
      placeholder="0,00"
      value={amount ?? ""}
      onChange={(val) => setValue("amount", val, { shouldValidate: true })}
      error={
        typeof errors.amount?.message === "string"
          ? errors.amount.message
          : undefined
      }
    />
  );
}
