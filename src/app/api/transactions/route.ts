import { NextResponse } from "next/server";
import { ApiResponse } from "../../../lib/api";
import { CreateTransactionType, TransactionType } from
  "../../../features/transactions/types";
import { v4 as uuid } from "uuid";
import { transactionsMockData } from "../../../features/transactions/providers/mock-data";

export async function POST(req: Request) {
  const createData: CreateTransactionType = await req.json();
  const data: TransactionType = { ...createData, id: uuid(), createdAt: new Date() };

  return NextResponse.json<ApiResponse<TransactionType>>({
    success: true,
    message: "Transferência realizada",
    data,
  });
}

export async function GET() {
  return NextResponse.json<ApiResponse<TransactionType[]>>({
    success: true,
    message: "Transferências recuperadas com sucesso",
    data: transactionsMockData,
  });
}

