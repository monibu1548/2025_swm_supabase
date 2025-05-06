import { ShortPathController } from "./../controllers/shortPathController.ts";
import { Hono } from "https://deno.land/x/hono@v4.3.11/hono.ts";

export const shortPathRouter = new Hono();

const shortPathController = new ShortPathController();

// /v1/shortPath 경로로 들어오는 POST 요청을 shortPathController의 postShortPathV1로 전달
shortPathRouter.post("/v1/shortPath", (c) =>
  shortPathController.postShortPathV1(c)
);

// /v1/shortPath 경로로 들어오는 GET 요청을 shortPathController의 getRedirectURLByShortPathV1 전달
shortPathRouter.get("/v1/shortPath", (c) =>
  shortPathController.getRedirectURLByShortPathV1(c)
);
