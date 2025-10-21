import { TransactionKeyType } from "../../../types";

export const inputSchema = {
  cpf: {
    label: "CPF",
    placeholder: "000.000.000-00",
    mask: "000.000.000-00",
    validation: {
      required: "Este campo é obrigatório",
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
      required: "Este campo é obrigatório",
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
      required: "Este campo é obrigatório",
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
      required: "Este campo é obrigatório",
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
      required: "Este campo é obrigatório",
      pattern: {
        value: /^.{8,}$/,
        message: "A chave deve ter pelo menos 8 caracteres",
      },
    },
  },
};

export const simpleInputSchema = {
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
