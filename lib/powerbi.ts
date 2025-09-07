import fetch from "node-fetch"

export async function getPowerBIAccessToken(): Promise<string> {
  const url = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`

  const params = new URLSearchParams()
  params.append("client_id", process.env.AZURE_CLIENT_ID!)
  params.append("scope", "https://analysis.windows.net/powerbi/api/.default")
  params.append("client_secret", process.env.AZURE_CLIENT_SECRET!)
  params.append("grant_type", "client_credentials")

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  })

  if (!res.ok) throw new Error(`Failed to get Power BI token: ${res.statusText}`)
  const data = await res.json()
  return data.access_token
}
