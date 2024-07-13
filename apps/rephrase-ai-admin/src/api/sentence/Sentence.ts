export type Sentence = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  originalText: string | null;
  rephrasedText: string | null;
};
