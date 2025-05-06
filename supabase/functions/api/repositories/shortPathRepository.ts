import { supabase } from "../../lib/supabase.ts";

export class ShortPathRepository {
  private generateRandomShortPath(): string {
    const characters =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789"; // 대문자 I, 소문자 l 제외
    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  private async isShortPathDuplicate(shortPath: string): Promise<boolean> {
    const { data, error } = await supabase
      .from("v1_short_paths")
      .select("id")
      .eq("short_path", shortPath)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116: No rows found
      console.error("Error checking short path duplication:", error);
      throw new Error("Failed to check short path duplication");
    }

    return !!data; // 중복이면 true 반환
  }

  async insertShortPath(redirectURL: string): Promise<string> {
    let shortPath = this.generateRandomShortPath();

    // 중복되지 않는 shortPath 생성
    while (await this.isShortPathDuplicate(shortPath)) {
      shortPath = this.generateRandomShortPath();
    }

    const { error } = await supabase.from("v1_short_paths").insert({
      short_path: shortPath,
      redirect_url: redirectURL,
    });

    if (error) {
      console.error("Error inserting short path:", error);
      throw new Error("Failed to insert short path");
    }

    return shortPath;
  }

  async getRedirectURLByShortPath(shortPath: string): Promise<string | null> {
    const { data, error } = await supabase
      .from("v1_short_paths")
      .select("redirect_url")
      .eq("short_path", shortPath)
      .single();

    if (error) {
      return null;
    }

    return data?.redirect_url || null;
  }
}
