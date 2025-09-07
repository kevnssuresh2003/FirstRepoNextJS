# Next.js + Power BI Full‑Stack Starter

This is a scaffolded repo for building a Next.js microservices solution with:
- Power BI embedding & semantic model KPI cards
- Azure SQL + on-prem SQL logging
- Fabric Governance insights
- RBAC via Azure AD groups (NextAuth)

## Getting Started

1. Copy `.env.example` → `.env.local` and fill values.
2. Ensure your Entra ID app registration adds the **groups** claim in ID tokens for users.
3. Install & run:
```bash
npm install
npm run dev
```

### Authentication (NextAuth + Azure AD)
- Sign in at any protected page; middleware enforces auth for all routes.
- Groups are read from the `id_token` and attached to the session.
- UI hides/shows the Governance tab based on `REQUIRE_ADMIN_GROUP`.

### Environment Variables
See `.env.example` for required values.

### Tabs
- **Inventory**: KPI cards (stub) – replace with API call to semantic model.
- **Observability**: Power BI embed (stub token).
- **Governance**: Admin-only; calls `/api/governance/capacity`.

---

Use GitHub Copilot to flesh out stubs by following comments in each file.
