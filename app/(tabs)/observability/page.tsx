'use client'
import { useEffect, useState } from 'react'
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'

export default function ObservabilityPage() {
  const [cfg, setCfg] = useState(null)
  useEffect(() => { (async () => {
    const res = await fetch('/api/powerbi/embed')
    setCfg(await res.json())
  })() }, [])

  if (!cfg) return <div>Loading...</div>

  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report',
        id: process.env.NEXT_PUBLIC_PBI_REPORT_ID,
        embedUrl: cfg.embedUrl,
        accessToken: cfg.accessToken,
        tokenType: models.TokenType.Embed
      }}
      cssClassName="w-full h-[80vh]"
    />
  )
}
