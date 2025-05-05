import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { supabaseProjectURL, supabaseServiceRoleKey } from "../environments";
import { Database } from "../types/supabase";

export const supabase = createClient<Database>(
  supabaseProjectURL,
  supabaseServiceRoleKey
);
