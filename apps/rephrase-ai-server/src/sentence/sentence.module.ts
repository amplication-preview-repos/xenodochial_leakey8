import { Module } from "@nestjs/common";
import { SentenceModuleBase } from "./base/sentence.module.base";
import { SentenceService } from "./sentence.service";
import { SentenceController } from "./sentence.controller";
import { SentenceResolver } from "./sentence.resolver";

@Module({
  imports: [SentenceModuleBase],
  controllers: [SentenceController],
  providers: [SentenceService, SentenceResolver],
  exports: [SentenceService],
})
export class SentenceModule {}
