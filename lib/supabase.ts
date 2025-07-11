import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type RSVPData = {
  id?: string
  first_name: string
  last_name: string
  email: string
  attending: "yes" | "no"
  message?: string
  created_at?: string
}
