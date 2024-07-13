import { SentenceWhereInput } from "./SentenceWhereInput";
import { SentenceOrderByInput } from "./SentenceOrderByInput";

export type SentenceFindManyArgs = {
  where?: SentenceWhereInput;
  orderBy?: Array<SentenceOrderByInput>;
  skip?: number;
  take?: number;
};
