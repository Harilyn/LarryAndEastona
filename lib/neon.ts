import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export { sql }

export type RSVPData = {
  id?: string
  first_name: string
  last_name: string
  email: string
  attending: "yes" | "no"
  message?: string
  created_at?: string
}
