import './globals.css'
import Link from 'next/link'
import { getServerSession } from '@/lib/auth'
import { visibleTabs } from '@/lib/rbac'

export const metadata = { title: 'Next.js + Power BI Starter' }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()
  const tabs = visibleTabs(session)
  const links = [
    { name: 'Inventory', href: '/inventory' },
    { name: 'Observability', href: '/observability' },
    ...(tabs.includes('Governance') ? [{ name: 'Governance', href: '/governance' }] : [])
  ]
  return (
    <html lang="en">
      <body className="p-6 bg-gray-50 min-h-screen">
        <nav className="flex gap-6 border-b pb-4 mb-6">
          {links.map(l => <Link key={l.href} href={l.href}>{l.name}</Link>)}
          <span className="ml-auto text-sm opacity-60">{session?.user?.upn ?? session?.user?.email}</span>
          <Link href="/docs">Docs</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
