"use client";

import { Input, Text } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { BasicPixFormType } from "../basic-pix-form";

export const InputKeyStepFields = ["key"] as const;

const inputConfigs = {
  cpf: {
    label: "CPF",
    placeholder: "000.000.000-00",
    mask: "000.000.000-00",
  },
  telefone: {
    label: "Telefone",
    placeholder: "(99) 99999-9999",
    mask: "(00) 00000-0000",
  },
  email: { label: "E-mail", placeholder: "exemplo@dominio.com", mask: "" },
  aleatoria: {
    label: "Chave aleatória",
    placeholder: "Digite a chave aleatória",
    mask: "",
  },
};

export function InputKeyStep() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<BasicPixFormType>();
  const keyType = watch("keyType");

  const config = inputConfigs[keyType as keyof typeof inputConfigs];

  register("key", { required: "Digite sua chave" });

  if (!config) {
    return (
      <Text c="dimmed" size="sm">
        Escolha o tipo de chave primeiro.
      </Text>
    );
  }

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Digite a chave PIX
      </Text>

      <label>
        {inputConfigs[keyType as keyof typeof inputConfigs].label}
        <Input
          label={config.label}
          placeholder={config.placeholder}
          component={IMaskInput}
          mask={config.mask || undefined}
          type={keyType === "email" ? "email" : "text"}
          {...register("key")}
          value={watch("key") || ""}
          onChange={(e: any) =>
            setValue("key", e.target.value, { shouldValidate: true })
          }
          error={errors.key?.message}
        />
      </label>
    </>
  );
}
