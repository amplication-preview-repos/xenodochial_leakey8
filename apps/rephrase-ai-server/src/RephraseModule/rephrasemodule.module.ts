import { Module } from "@nestjs/common";
import { RephraseModuleService } from "./rephrasemodule.service";
import { RephraseModuleController } from "./rephrasemodule.controller";
import { RephraseModuleResolver } from "./rephrasemodule.resolver";

@Module({
  controllers: [RephraseModuleController],
  providers: [RephraseModuleService, RephraseModuleResolver],
  exports: [RephraseModuleService],
})
export class RephraseModuleModule {}
