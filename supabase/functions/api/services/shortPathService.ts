import { ShortPathRepository } from "../repositories/shortPathRepository.ts";

export class ShortPathService {
  private shortPathRepository: ShortPathRepository;

  constructor() {
    this.shortPathRepository = new ShortPathRepository();
  }

  async insertShortPath(shortPath: string, redirectURL: string) {
    // TODO: 비즈니스 수준에서 shortPath를 추가
  }

  async getRedirectURLByShortPath(shortPath: string): Promise<string> {
    // TODO: 비즈니스 수준에서 redirectURL 탐색
    return "";
  }
}
