import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SentenceService } from "./sentence.service";
import { SentenceControllerBase } from "./base/sentence.controller.base";

@swagger.ApiTags("sentences")
@common.Controller("sentences")
export class SentenceController extends SentenceControllerBase {
  constructor(protected readonly service: SentenceService) {
    super(service);
  }
}
