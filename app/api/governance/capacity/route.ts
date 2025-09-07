import { NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth'
import { canSeeGovernance } from '@/lib/rbac'

export async function GET() {
  const session = await getServerSession()
  if (!session || !canSeeGovernance(session)) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  // TODO: Replace stub with real Admin API calls
  return NextResponse.json({
    capacities: [{ id: 'cap1', name: 'Default Capacity' }],
    throttlingEvents: [],
    overageByEvent: []
  })
}
