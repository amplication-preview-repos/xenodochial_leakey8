import * as graphql from "@nestjs/graphql";
import { SentenceResolverBase } from "./base/sentence.resolver.base";
import { Sentence } from "./base/Sentence";
import { SentenceService } from "./sentence.service";

@graphql.Resolver(() => Sentence)
export class SentenceResolver extends SentenceResolverBase {
  constructor(protected readonly service: SentenceService) {
    super(service);
  }
}
