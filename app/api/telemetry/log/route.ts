import { NextResponse } from "next/server"
import { logEvent } from "@/lib/mssql"

export async function POST(req: Request) {
  const body = await req.json()
  await logEvent("FRONTEND_EVENT", body)
  return NextResponse.json({ ok: true })
}
