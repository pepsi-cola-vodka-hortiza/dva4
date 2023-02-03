import React, { useState } from "react";
import { Button, Input } from "antd";
import "./NoteForm.css";

const { TextArea } = Input;

const NoteForm = (props) => {
  const [value, setValue] = useState(props.content || "");

  const onSave = () => {
    props.action({ variables: { updateNoteId: props.id, content: value } });
  };

  const onHandleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="note_form">
      <TextArea value={value} onChange={onHandleChange} rows={4} />
      <Button onClick={onSave}>
        <span>Save</span>
      </Button>
    </div>
  );
};

export default NoteForm;
