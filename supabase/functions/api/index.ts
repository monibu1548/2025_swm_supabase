import { supabase } from "./../lib/supabase.ts";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req) => {
  const { data, error } = await supabase.from("v1_short_paths").insert({
    redirect_url: "https://example.com",
    short_path: "example",
  });

  if (error) {
    console.error("Error inserting data:", error);
    return new Response("Failed to insert data", { status: 500 });
  }

  return new Response("Data inserted successfully");
});
