import { Input, Text, Container } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { TransactionFormType } from "../../../types";
import { inputSchema } from "./input-schemas";

export function KeyStep() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<TransactionFormType>();

  const keyType = watch("keyType");
  const key = watch("key");

  if (!keyType || !(keyType in inputSchema)) {
    return (
      <Text c="dimmed" size="sm">
        Escolha o tipo de chave primeiro.
      </Text>
    );
  }

  const config = inputSchema[keyType as keyof typeof inputSchema];

  return (
    <>
      <Text size="lg" fw={500}>
        Digite a chave PIX
      </Text>

      <Container p={0} mt="sm">
        <Text size="md" fw={500} mb={4}>
          {config.label}
        </Text>

        <Input
          size="md"
          placeholder={config.placeholder}
          component={IMaskInput}
          mask={config.mask || undefined}
          required
          type={keyType === "email" ? "email" : "text"}
          {...register("key", config.validation)}
          value={key || ""}
          onChange={(e: any) => setValue("key", e.target.value)}
          error={errors.key?.message}
        />

        {errors.key && (
          <Text c="red" size="sm" mt="xs">
            {errors.key.message}
          </Text>
        )}
      </Container>
    </>
  );
}
