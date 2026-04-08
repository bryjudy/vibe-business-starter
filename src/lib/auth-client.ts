import { createAuthClient } from "better-auth/react"

// Use current origin so auth works on preview URLs, production, and localhost
// without CORS issues from hardcoded domains
const baseURL = typeof window !== "undefined"
  ? window.location.origin
  : process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"

export const authClient = createAuthClient({
  baseURL,
})

export const {
  signIn,
  signOut,
  signUp,
  useSession,
  getSession,
  requestPasswordReset,
  resetPassword,
  sendVerificationEmail,
} = authClient