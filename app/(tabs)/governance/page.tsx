export default async function GovernancePage() {
  const res = await fetch('/api/governance/capacity', { cache: 'no-store' })
  const data = await res.json()
  return (
    <div>
      <h1 className="text-xl mb-4">Fabric Capacity Insights</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
