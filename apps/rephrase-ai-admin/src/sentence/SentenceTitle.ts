import { Sentence as TSentence } from "../api/sentence/Sentence";

export const SENTENCE_TITLE_FIELD = "id";

export const SentenceTitle = (record: TSentence): string => {
  return record.id?.toString() || String(record.id);
};
