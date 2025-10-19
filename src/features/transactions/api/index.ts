import { api, ApiResponse } from "../../../lib/api";
import { CreateTransactionType, TransactionType } from "../types";

export function createTransaction(values: CreateTransactionType) {
  return api.post("/transactions", values);
}

export function getTransactions() {
  return api.get<ApiResponse<TransactionType[]>>("/transactions");
}
