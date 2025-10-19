import { NextResponse } from "next/server";
import { transactionsMockData } from "../../../features/transactions/providers/mock-data";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Dados recebidos:", data);

  return NextResponse.json({
    success: true,
    message: "Transferência simulada com sucesso",
    data,
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Transferências simuladas com sucesso",
    data: transactionsMockData,
  });
}
