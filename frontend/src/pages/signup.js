import { useMutation } from "@apollo/client";
import { isLoggedInVar } from "../App";
import UserForm from "../components/user-form/UserForm";
import { SIGNUP_USER } from "../gql/mutation";

const SignUp = (props) => {
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      console.log("signUp: ", data);
      isLoggedInVar(true);
      props.history.push("/");
    },
  });

  return <UserForm formType="signUp" handleSubmit={signUp} />;
};

export default SignUp;
