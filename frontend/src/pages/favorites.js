import { useQuery } from "@apollo/client";
import Note from "../components/Note";
import { GET_MY_FAVORITES, GET_MY_NOTES } from "../gql/query";

const Favorites = () => {
  const { data, loading, error } = useQuery(GET_MY_FAVORITES);

  return (
    <div>
      {data?.me?.favorites?.map((note) => (
        <Note note={note} />
      ))}
    </div>
  );
};
export default Favorites;
