export const metadata = { title: "Documentation" }

export default function DocsPage() {
  return (
    <div className="prose max-w-3xl">
      <h1>Platform Documentation</h1>
      <p>
        Welcome! This documentation explains the functionality of the three main
        tabs available in this platform.
      </p>

      <h2>1. Inventory</h2>
      <p>
        The <strong>Inventory</strong> tab provides summarized business data from
        the Power BI semantic model. Information is displayed as cards, giving
        you quick insights into key KPIs and trends.
      </p>

      <h2>2. Observability</h2>
      <p>
        The <strong>Observability</strong> tab integrates with embedded Power BI
        reports. It enables you to explore detailed telemetry and reporting data,
        with interactive filtering and drill-down capabilities. This empowers
        users to analyze operational and usage patterns across services.
      </p>

      <h2>3. Governance</h2>
      <p>
        The <strong>Governance</strong> tab is reserved for administrators and
        displays data from Microsoft Fabric capacity metrics. It includes details
        about:
      </p>
      <ul>
        <li>Capacity throttling events</li>
        <li>Number of capacities in the tenant</li>
        <li>Capacity overage events with metadata</li>
      </ul>
      <p>
        Access is limited to members of the
        <code>powerbi_Admin_grp1</code> group. Other users will not see this tab
        in the navigation.
      </p>

      <hr />
      <p>
        All users in the organization can access this documentation to understand
        how the platform is structured and what features are available based on
        their role.
      </p>
    </div>
  )
}
