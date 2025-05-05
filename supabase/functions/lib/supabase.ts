import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { supabaseProjectURL, supabaseServiceRoleKey } from "../environments.ts";
import { Database } from "../types/supabase.ts";

export const supabase = createClient<Database>(
  supabaseProjectURL,
  supabaseServiceRoleKey
);
