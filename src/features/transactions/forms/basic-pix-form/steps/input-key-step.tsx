"use client";

import { Text, TextInput } from "@mantine/core";
import { useFormContext, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

export function InputKeyStep() {
  const { control, watch } = useFormContext();

  const keyType = watch("keyType");

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
    email: {
      label: "E-mail",
      placeholder: "exemplo@dominio.com",
      mask: "", // sem máscara
    },
    aleatoria: {
      label: "Chave aleatória",
      placeholder: "Digite a chave aleatória",
      mask: "",
    },
  } as const;

  const config = inputConfigs[keyType as keyof typeof inputConfigs];

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

      <Controller
        name="key"
        control={control}
        rules={{ required: true }}
        render={({ field }) =>
          config.mask ? (
            <TextInput
              label={config.label}
              placeholder={config.placeholder}
              component={IMaskInput}
              mask={config.mask}
              {...field}
            />
          ) : (
            <TextInput
              label={config.label}
              placeholder={config.placeholder}
              type={keyType === "email" ? "email" : "text"}
              {...field}
            />
          )
        }
      />
    </>
  );
}
