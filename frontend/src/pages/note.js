import { useQuery } from "@apollo/client";
import { Spin } from "antd";
import { GET_NOTE } from "../gql/query";

const NotePage = (props) => {
  const id = props.match.params.id;
  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });

  return (
    <div>
      {data?.note?.content}
      {loading && <Spin />}
      {error && <div>Error! Note not found!</div>}
    </div>
  );
};

export default NotePage;
