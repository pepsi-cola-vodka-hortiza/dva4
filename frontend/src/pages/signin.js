import { useMutation } from "@apollo/client";
import { isLoggedInVar } from "../App";
import UserForm from "../components/user-form/UserForm";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { SIGNIN_USER } from "../gql/mutation";

const SignIn = (props) => {
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn);
      console.log("signIn: ", data);
      isLoggedInVar(true);
      props.history.push("/");
    },
  });

  const disableLinkDecoration = {
    textDecoration: "none",
  };

  return (
    <>
      <span>No account?</span>
      <Button>
        <Link to={"/signup"} style={disableLinkDecoration}>
          <span>Sign Up</span>
        </Link>
      </Button>
      <UserForm formType="signIn" handleSubmit={signIn} />
    </>
  );
};

export default SignIn;
