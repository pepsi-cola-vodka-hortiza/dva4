import NoteForm from "../components/note-form/NoteForm";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MY_NOTES, GET_NOTE, GET_NOTES } from "../gql/query";
import { UPDATE_NOTE } from "../gql/mutation";

const UpdateNote = (props) => {
  const id = props.match.params.id;
  const content = props.location.query.content;

  const [updateNote, { loading, error }] = useMutation(UPDATE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: () => {
      props.history.push("/mynotes");
    },
  });

  return content ? (
    <NoteForm action={updateNote} id={id} content={content} />
  ) : null;
};

export default UpdateNote;
