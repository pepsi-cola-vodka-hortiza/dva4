import { useQuery } from "@apollo/client";
import { Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import { isLoggedInVar } from "../../App";
import "./Header.css";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import { IS_LOGGED_IN } from "../../gql/query";

const Header = (props) => {
  const { data, client } = useQuery(IS_LOGGED_IN);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    client.resetStore();
    props.history.push("/");
    isLoggedInVar(false);
  };

  const disableLinkDecoration = {
    textDecoration: "none",
  };

  return (
    <div className="header">
      <Logo />
      <Navigation />
      <div className="button_container">
        {data.isLoggedIn ? (
          <Button onClick={handleLogOut}>
            <span>Log Out</span>
          </Button>
        ) : (
          <Button>
            <Link to={"/signin"} style={disableLinkDecoration}>
              <span>Sign In</span>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
