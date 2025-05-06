import { ShortPathService } from "../services/shortPathService.ts";
import { Context } from "https://deno.land/x/hono/mod.ts";

export class ShortPathController {
  private shortPathService: ShortPathService;

  constructor() {
    this.shortPathService = new ShortPathService();
  }

  async postShortPathV1(c: Context) {
    // TODO: 사용자 입력 처리, 파라미터 유효성 검사
    return c.json("postShortPathV1 호출됨");
  }

  async getRedirectURLByShortPathV1(c: Context) {
    // TODO: 사용자 입력 처리, 파라미터 유효성 검사
    return c.json("getRedirectURLByShortPathV1 호출됨");
  }
}
