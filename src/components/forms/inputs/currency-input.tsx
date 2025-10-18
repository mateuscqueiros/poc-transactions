"use client";

import { TextInput, TextInputProps } from "@mantine/core";

interface CurrencyInputProps
  extends Omit<TextInputProps, "onChange" | "value"> {
  value?: string | number;
  onChange?: (value: number) => void;
}

export function CurrencyInput({
  value,
  onChange,
  ...props
}: CurrencyInputProps) {
  function formatCurrency(val: number | string | undefined) {
    if (val === undefined || val === null || val === "") return "";
    const num =
      typeof val === "number" ? val : parseFloat(val.replace(/\D/g, "")) / 100;
    return isNaN(num)
      ? ""
      : new Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(num);
  }

  function parseCurrency(val: string): number {
    const digits = val.replace(/\D/g, "");
    const num = parseFloat(digits) / 100;
    return isNaN(num) ? 0 : num;
  }

  return (
    <TextInput
      {...props}
      value={formatCurrency(value)}
      onChange={(e) => {
        const parsed = parseCurrency(e.target.value);
        onChange?.(parsed);
      }}
    />
  );
}
