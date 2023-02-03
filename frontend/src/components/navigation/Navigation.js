import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const disableLinkDecoration = {
    textDecoration: "none",
  };

  return (
    <div className="navigation_wrapper">
      <Link to="/" style={disableLinkDecoration}>
        <span className="navigation_link">Home</span>
      </Link>

      <Link to="/new" style={disableLinkDecoration}>
        <span className="navigation_link">New</span>
      </Link>

      <Link to="/favorites" style={disableLinkDecoration}>
        <span className="navigation_link">Favorites</span>
      </Link>

      <Link to="/mynotes" style={disableLinkDecoration}>
        <span className="navigation_link">My notes</span>
      </Link>
    </div>
  );
};

export default Navigation;
