import sql from "mssql"

const config: sql.config = {
  user: process.env.MSSQL_USER!,
  password: process.env.MSSQL_PASSWORD!,
  server: process.env.MSSQL_SERVER!,
  database: process.env.MSSQL_DATABASE!,
  options: { encrypt: true, trustServerCertificate: true },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 }
}

let pool: sql.ConnectionPool | null = null

export async function getMSSQLPool() {
  if (pool) return pool
  pool = await sql.connect(config)
  return pool
}

export async function logEvent(eventType: string, details: any) {
  const pool = await getMSSQLPool()
  await pool.request()
    .input("eventType", sql.NVarChar, eventType)
    .input("details", sql.NVarChar, JSON.stringify(details))
    .query(`INSERT INTO AuditTelemetry (eventType, details, createdAt) VALUES (@eventType, @details, GETDATE())`)
}
