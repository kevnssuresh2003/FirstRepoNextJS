export function userGroups(session: any): string[] {
  return session?.user?.groups ?? []
}
export function canSeeGovernance(session: any): boolean {
  const groups = userGroups(session)
  const adminGroup = process.env.REQUIRE_ADMIN_GROUP
  return adminGroup ? groups.includes(adminGroup) : false
}
export function visibleTabs(session: any) {
  const base = ["Inventory","Observability"]
  return canSeeGovernance(session) ? [...base, "Governance"] : base
}
