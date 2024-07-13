import { Injectable } from "@nestjs/common";
import { SentenceInputDto } from "../rephraseModule/SentenceInputDto";
import { SentenceOutputDto } from "../rephraseModule/SentenceOutputDto";

@Injectable()
export class RephraseModuleService {
  constructor() {}
  async RephraseSentence(args: SentenceInputDto): Promise<SentenceOutputDto> {
    throw new Error("Not implemented");
  }
}
