"use client";

import { Input, Text, Container } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { TransactionFormType } from "../../../types";
import { useEffect } from "react";
import { simpleInputSchema as inputSchema } from "./input-schemas";

export function SimpleKeyStep() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<TransactionFormType>();
  const keyType = watch("keyType");
  const keyValue = watch("key");

  useEffect(() => {
    setValue("key", "");
  }, [keyType, setValue]);

  if (!keyType || !(keyType in inputSchema)) {
    return (
      <Text c="dimmed" size="sm">
        Escolha o tipo de chave primeiro.
      </Text>
    );
  }

  const config = inputSchema[keyType];

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
