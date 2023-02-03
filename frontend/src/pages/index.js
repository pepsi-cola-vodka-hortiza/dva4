import Home from "./home";
import MyNotes from "./mynotes";
import Favorites from "./favorites";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotePage from "./note";
import SignUp from "./signup";
import SignIn from "./signin";
import { useQuery } from "@apollo/client";
import NewNote from "./new";
import { IS_LOGGED_IN } from "../gql/query";
import UpdateNote from "./edit";

const Pages = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <PrivateRoute path="/mynotes" component={MyNotes} />
        <PrivateRoute path="/new" component={NewNote} />
        <PrivateRoute path="/edit/:id" component={UpdateNote} />
        <Route path="/note/:id" component={NotePage} />
      </Layout>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  return (
    <Route
      {...rest}
      render={(props) =>
        data.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default Pages;
