export default async function InventoryPage() {
  const dummy = [
    { title: 'Total Users', value: 1200 },
    { title: 'Active Reports', value: 45 },
    { title: 'Refresh Failures (7d)', value: 3 }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {dummy.map((c) => (
        <div key={c.title} className="rounded-2xl shadow p-6 bg-white">
          <div className="text-sm opacity-70">{c.title}</div>
          <div className="text-3xl font-semibold">{c.value}</div>
        </div>
      ))}
    </div>
  )
}
