import { TransactionClass } from "../types";

export function formatClass(className: TransactionClass) {
  switch (className) {
    case TransactionClass.Pix:
      return "Pix";
    case TransactionClass.Debit:
      return "Débito";
    case TransactionClass.Credit:
      return "Crédito";
    case TransactionClass.Transfer:
      return "Transferência";
    case TransactionClass.Deposit:
      return "Depósito";
  }
}

export function formatCurrency(
  value: number,
  locale: string = "pt-BR",
  currency: string = "BRL",
  prefix?: string
) {
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);

  return prefix ? `${prefix} ${formatted}` : formatted;
}
