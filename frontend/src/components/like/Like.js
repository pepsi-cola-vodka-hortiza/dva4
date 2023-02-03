import "./Like.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useCallback, useState } from "react";

const LikeComponent = (props) => {
  const [isActive, setActive] = useState(
    props.favorites?.filter((note) => note.id === props.id).length > 0
  );

  const onClickHandler = useCallback(() => {
    setActive(!isActive);
    props.toggleFavorites({ variables: { id: props.id } });
  }, [isActive, props]);

  const getFavoritedByForNote = useCallback(() => {
    return props.favoritedBy?.map((user) => {
      return <span>{user.username}</span>;
    });
  }, [props.favoritedBy]);

  return (
    <div>
      {isActive ? (
        <HeartFilled onClick={onClickHandler} />
      ) : (
        <HeartOutlined onClick={onClickHandler} />
      )}
      <div>Likes: {getFavoritedByForNote()}</div>
    </div>
  );
};
export default LikeComponent;
