import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SentenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="originalText" multiline source="originalText" />
        <TextInput label="rephrasedText" multiline source="rephrasedText" />
      </SimpleForm>
    </Edit>
  );
};
