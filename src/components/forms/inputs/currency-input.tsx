"use client";

import { TextInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

export function CurrencyInput({ name }: { name: string }) {
  const { control } = useFormContext();

  function formatCurrency(value: number | string) {
    if (!value && value !== 0) return "";
    const number =
      typeof value === "number"
        ? value
        : parseFloat(value.replace(/\D/g, "")) / 100;

    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  function parseCurrency(value: string) {
    if (!value) return 0;
    const numeric = value.replace(/\D/g, "");
    return parseFloat(numeric) / 100;
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextInput
          label="Valor"
          placeholder="0,00"
          leftSection="R$"
          value={formatCurrency(field.value)}
          onChange={(e) => field.onChange(parseCurrency(e.target.value))}
        />
      )}
    />
  );
}
