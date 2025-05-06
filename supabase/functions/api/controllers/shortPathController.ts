import { ShortPathService } from "../services/shortPathService.ts";
import { Context } from "https://deno.land/x/hono/mod.ts";

export class ShortPathController {
  private shortPathService: ShortPathService;

  constructor() {
    this.shortPathService = new ShortPathService();
  }

  async postShortPathV1(c: Context) {
    try {
      // 요청 본문에서 redirectURL 추출
      const body = await c.req.json();
      const redirectURL = body.redirectURL;

      if (!redirectURL || typeof redirectURL !== "string") {
        return c.json({ error: "Invalid or missing redirectURL" }, 400);
      }

      // ShortPath 생성
      const shortPath =
        await this.shortPathService.insertShortPath(redirectURL);

      return c.json({ shortPath }, 201); // 생성된 shortPath 반환
    } catch (error) {
      console.error("Error in postShortPathV1:", error);
      return c.json({ error: "Failed to create short path" }, 500);
    }
  }

  async getRedirectURLByShortPathV1(c: Context) {
    try {
      // URL 파라미터에서 shortPath 추출
      const shortPath = c.req.query("shortPath");

      if (!shortPath || typeof shortPath !== "string") {
        return c.json({ error: "Invalid or missing shortPath" }, 400);
      }

      // ShortPath로부터 redirectURL 조회
      const redirectURL =
        await this.shortPathService.getRedirectURLByShortPath(shortPath);

      if (!redirectURL) {
        return c.json({ error: "Short path not found" }, 404);
      }

      return c.json({ redirectURL }, 200); // 조회된 redirectURL 반환
    } catch (error) {
      console.error("Error in getRedirectURLByShortPathV1:", error);
      return c.json({ error: "Failed to fetch redirect URL" }, 500);
    }
  }
}
