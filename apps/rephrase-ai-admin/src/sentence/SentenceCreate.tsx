import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SentenceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="originalText" multiline source="originalText" />
        <TextInput label="rephrasedText" multiline source="rephrasedText" />
      </SimpleForm>
    </Create>
  );
};
