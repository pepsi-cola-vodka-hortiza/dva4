import { useMutation, useQuery } from "@apollo/client";
import Note from "../components/Note";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import { GET_MY_FAVORITES, GET_NOTES } from "../gql/query";
import { TOGGLE_FAVORITE } from "../gql/mutation";
import LikeComponent from "../components/like/Like";

const Home = () => {
  const [toggleFavorites] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_FAVORITES }],
  });
  const { data, loading } = useQuery(GET_NOTES);
  const { data: favorites } = useQuery(GET_MY_FAVORITES);

  return (
    <div>
      {data?.notes?.map((note) => (
        <>
          <Link to={`note/${note.id}`}>
            <Note note={note} />
          </Link>
          {note.id && favorites?.me?.favorites && note?.favoritedBy ? (
            <LikeComponent
              id={note.id}
              toggleFavorites={toggleFavorites}
              favorites={favorites?.me?.favorites}
              favoritedBy={note?.favoritedBy}
            />
          ) : null}
        </>
      ))}
      {loading && <Spin />}
    </div>
  );
};
export default Home;
