import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Dados recebidos:", data);

  return NextResponse.json({
    success: true,
    message: "Transferência simulada com sucesso",
    data,
  });
}
