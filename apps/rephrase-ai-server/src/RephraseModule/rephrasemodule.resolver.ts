import * as graphql from "@nestjs/graphql";
import { SentenceInputDto } from "../rephraseModule/SentenceInputDto";
import { SentenceOutputDto } from "../rephraseModule/SentenceOutputDto";
import { RephraseModuleService } from "./rephrasemodule.service";

export class RephraseModuleResolver {
  constructor(protected readonly service: RephraseModuleService) {}

  @graphql.Mutation(() => SentenceOutputDto)
  async RephraseSentence(
    @graphql.Args()
    args: SentenceInputDto
  ): Promise<SentenceOutputDto> {
    return this.service.RephraseSentence(args);
  }
}
