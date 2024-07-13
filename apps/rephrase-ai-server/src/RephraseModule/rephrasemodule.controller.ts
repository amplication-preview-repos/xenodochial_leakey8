import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RephraseModuleService } from "./rephrasemodule.service";
import { SentenceInputDto } from "../rephraseModule/SentenceInputDto";
import { SentenceOutputDto } from "../rephraseModule/SentenceOutputDto";

@swagger.ApiTags("rephraseModules")
@common.Controller("rephraseModules")
export class RephraseModuleController {
  constructor(protected readonly service: RephraseModuleService) {}

  @common.Post("/rephrase")
  @swagger.ApiOkResponse({
    type: SentenceOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RephraseSentence(
    @common.Body()
    body: SentenceInputDto
  ): Promise<SentenceOutputDto> {
        return this.service.RephraseSentence(body);
      }
}
