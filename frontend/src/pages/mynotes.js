import { useMutation, useQuery } from "@apollo/client";
import { GET_MY_NOTES, GET_NOTES } from "../gql/query";
import Note from "../components/Note";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { DELETE_NOTE } from "../gql/mutation";

const MyNotes = (props) => {
  const { data, loading, error } = useQuery(GET_MY_NOTES);

  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
  });

  const disableLinkDecoration = {
    textDecoration: "none",
  };
  return (
    <div>
      {data?.me?.notes?.map((note) => (
        <>
          <Link
            to={{
              pathname: `edit/${note.id}`,
              query: { content: note.content },
            }}
            style={disableLinkDecoration}
          >
            <Note note={note} />
          </Link>
          <Button
            type="default"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => {
              deleteNote({ variables: { id: note.id } });
            }}
          />
        </>
      ))}
    </div>
  );
};

export default MyNotes;
