export class ShortPathRepository {
  async insertShortPath(shortPath: string, redirectURL: string) {
    // TODO: v1_short_path 테이블에 데이터 적재
  }

  async getRedirectURLByShortPath(shortPath: string): Promise<string> {
    // TODO: v1_short_path 테이블에서 shortPath에 매칭되는 redirectURL 반환
    return "";
  }
}
