import { NextResponse } from "next/server"
import { getPowerBIAccessToken } from "@/lib/powerbi"
import { logEvent } from "@/lib/mssql"

export async function GET() {
  try {
    const token = await getPowerBIAccessToken()

    await logEvent("PBI_EMBED_TOKEN_REQUEST", { report: process.env.PBI_REPORT_ID })

    return NextResponse.json({
      accessToken: token,
      reportId: process.env.PBI_REPORT_ID,
      workspaceId: process.env.PBI_WORKSPACE_ID
    })
  } catch (err: any) {
    await logEvent("PBI_EMBED_TOKEN_ERROR", { error: err.message })
    return new NextResponse("Error fetching token", { status: 500 })
  }
}
