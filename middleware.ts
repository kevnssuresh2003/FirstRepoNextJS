import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token
  }
})

export const config = {
  matcher: [
    // protect all routes except NextAuth, public files, and api that must be anonymous
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)"
  ]
}
