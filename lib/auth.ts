import NextAuth, { NextAuthOptions, getServerSession as getNextServerSession } from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_CLIENT_ID!,
      clientSecret: process.env.AZURE_CLIENT_SECRET!,
      tenantId: process.env.AZURE_TENANT_ID!,
      authorization: { params: { scope: "openid profile email" } }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account }) {
      // When user signs in, parse groups from id_token (requires groups claim configured in Entra ID)
      if (account?.id_token) {
        try {
          const payload = JSON.parse(Buffer.from(account.id_token.split(".")[1], "base64").toString())
          if (payload.groups && Array.isArray(payload.groups)) token.groups = payload.groups
          if (payload.preferred_username) token.upn = payload.preferred_username
        } catch { /* ignore */ }
      }
      return token
    },
    async session({ session, token }) {
      // Attach groups and UPN to session
      const groups = (token as any).groups || []
      ;(session as any).user.groups = groups
      ;(session as any).user.upn = (token as any).upn || session.user?.email
      return session
    }
  }
}

export async function getServerSession() {
  return getNextServerSession(authOptions)
}
