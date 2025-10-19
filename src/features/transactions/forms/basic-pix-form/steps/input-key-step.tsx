"use client";

import { Input, Text, Container } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { BasicPixFormType } from "../basic-pix-form";

const inputSchema = {
  cpf: {
    label: "CPF",
    placeholder: "000.000.000-00",
    mask: "000.000.000-00",
    validation: {
      required: "Digite seu CPF",
      pattern: {
        value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        message: "CPF inválido",
      },
    },
  },
  cnpj: {
    label: "CNPJ",
    placeholder: "00.000.000/0000-00",
    mask: "00.000.000/0000-00",
    validation: {
      required: "Digite seu CNPJ",
      pattern: {
        value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        message: "CNPJ inválido",
      },
    },
  },
  phone: {
    label: "Telefone",
    placeholder: "(99) 99999-9999",
    mask: "(00) 00000-0000",
    validation: {
      required: "Digite seu telefone",
      pattern: {
        value: /^\(\d{2}\) \d{5}-\d{4}$/,
        message: "Telefone inválido",
      },
    },
  },
  email: {
    label: "E-mail",
    placeholder: "exemplo@dominio.com",
    mask: "",
    validation: {
      required: "Digite seu e-mail",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "E-mail inválido",
      },
    },
  },
  random: {
    label: "Chave aleatória",
    placeholder: "Digite a chave aleatória",
    mask: "",
    validation: {
      required: "Digite a chave aleatória",
      minLength: {
        value: 8,
        message: "A chave deve ter pelo menos 8 caracteres",
      },
    },
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
  const keyValue = watch("key");

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

      <Container mt="sm" p={0}>
        <Text size="sm" mb={4}>
          {config.label}
        </Text>

        <Input
          size="md"
          placeholder={config.placeholder}
          component={IMaskInput}
          mask={config.mask || undefined}
          type={keyType === "email" ? "email" : "text"}
          {...register("key", config.validation)}
          value={keyValue || ""}
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
