import { SortOrder } from "../../util/SortOrder";

export type SentenceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  originalText?: SortOrder;
  rephrasedText?: SortOrder;
};
