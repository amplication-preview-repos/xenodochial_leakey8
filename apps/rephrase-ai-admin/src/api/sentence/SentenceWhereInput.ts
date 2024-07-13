import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SentenceWhereInput = {
  id?: StringFilter;
  originalText?: StringNullableFilter;
  rephrasedText?: StringNullableFilter;
};
