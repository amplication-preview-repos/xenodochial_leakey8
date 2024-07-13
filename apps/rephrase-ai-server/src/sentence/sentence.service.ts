import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SentenceServiceBase } from "./base/sentence.service.base";

@Injectable()
export class SentenceService extends SentenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
