import NoteForm from "../components/note-form/NoteForm";
import { useMutation } from "@apollo/client";
import { GET_MY_NOTES, GET_NOTES } from "../gql/query";
import { CREATE_NOTE } from "../gql/mutation";

const NewNote = (props) => {
  const [createNote, { loading, error }] = useMutation(CREATE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: (data) => {
      props.history.push(`/note/${data.createNote.id}`);
    },
  });
  return <NoteForm action={createNote} />;
};

export default NewNote;
