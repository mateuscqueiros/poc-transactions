"use client";

import { Input, Text, Container } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { TransactionFormType, TransactionKeyType } from "../../../types";
import { useEffect } from "react";

const inputSchema = {
  [TransactionKeyType.CPF]: {
    label: "CPF",
    placeholder: "000.000.000-00",
    pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    errorMessage: "CPF inválido",
  },
  [TransactionKeyType.CNPJ]: {
    label: "CNPJ",
    placeholder: "00.000.000/0000-00",
    pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    errorMessage: "CNPJ inválido",
  },
  [TransactionKeyType.Phone]: {
    label: "Telefone",
    placeholder: "(99) 99999-9999",
    pattern: /^\(\d{2}\) \d{5}-\d{4}$/,
    errorMessage: "Telefone inválido",
  },
  [TransactionKeyType.Email]: {
    label: "E-mail",
    placeholder: "exemplo@dominio.com",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "E-mail inválido",
  },
  [TransactionKeyType.Random]: {
    label: "Chave aleatória",
    placeholder: "Digite a chave aleatória",
    pattern: /^.{8,}$/,
    errorMessage: "A chave deve ter pelo menos 8 caracteres",
  },
};

export function SimpleKeyStep() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<TransactionFormType>();
  const keyType = watch("keyType");
  const keyValue = watch("key");

  if (!keyType || !(keyType in inputSchema)) {
    return (
      <Text c="dimmed" size="sm">
        Escolha o tipo de chave primeiro.
      </Text>
    );
  }

  const config = inputSchema[keyType];

  useEffect(() => {
    setValue("key", "");
  }, [keyType, setValue]);

  return (
    <Container mt="sm" p={0}>
      <Text size="lg" fw={500} mb="sm">
        Digite a chave PIX
      </Text>

      <Text size="sm" mb={4}>
        {config.label}
      </Text>

      <Input
        placeholder={config.placeholder}
        {...register("key", {
          required: `Digite a chave ${config.label.toLowerCase()}`,
          pattern: {
            value: config.pattern,
            message: config.errorMessage,
          },
        })}
        value={keyValue || ""}
        onChange={(e) => setValue("key", e.target.value)}
        mb="sm"
      />

      {errors.key && (
        <Text c="red" size="sm">
          {errors.key.message}
        </Text>
      )}
    </Container>
  );
}
