import { ShortPathRepository } from "../repositories/shortPathRepository.ts";

export class ShortPathService {
  private shortPathRepository: ShortPathRepository;

  constructor() {
    this.shortPathRepository = new ShortPathRepository();
  }

  async insertShortPath(redirectURL: string): Promise<string> {
    return await this.shortPathRepository.insertShortPath(redirectURL);
  }

  async getRedirectURLByShortPath(shortPath: string): Promise<string | null> {
    return await this.shortPathRepository.getRedirectURLByShortPath(shortPath);
  }
}
