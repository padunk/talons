import React from "react";
import { Link, withRouter } from "react-router-dom";
import { MAIN_ROUTES } from "../../constants/constants";
import {
  Container,
  UnstyledInputText,
  InnerWrapper,
  FormWrapper,
  ErrorDiv,
  StyledForm,
  FormInputWrapper,
} from "../GlobalComponents/GlobalComponents";
import { Button } from "../Buttons/Button";
import { useFirebaseContext } from "../Firebase";
import { ErrorMessage } from "../../constants/interfaces";

function LoginPageComp(props: any) {
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [userPassword, setUserPassword] = React.useState<string>("");
  const [error, setError] = React.useState<ErrorMessage>({
    message: "",
  });

  const isInvalid = userEmail === "" || userPassword === "";
  const firebaseContext = useFirebaseContext();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firebaseContext
      .doSignInWithEmailAndPassword(userEmail, userPassword)
      .then((authUser: firebase.auth.UserCredential | null) => {
        // setUser
        // console.log(authUser);
        setUserEmail("");
        setUserPassword("");
        setError({
          message: "",
        });
        props.history.push(MAIN_ROUTES.home);
      })
      .catch((err: ErrorMessage) => setError({ message: err.message }));
  };

  return (
    <Container>
      <InnerWrapper>
        <FormWrapper>
          <div>
            <p>LOGIN</p>
          </div>
          <ErrorDiv>{error.message && <p>{error.message}</p>}</ErrorDiv>
          <StyledForm onSubmit={onSubmit}>
            <FormInputWrapper>
              <label htmlFor='user-email'>Email:</label>
              <UnstyledInputText
                type='text'
                name='user-email'
                id='user-email'
                onChange={(event) => setUserEmail(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-password'>Password:</label>
              <UnstyledInputText
                type='password'
                name='user-password'
                id='user-password'
                onChange={(event) => setUserPassword(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <Button type='submit' looks='primary' disabled={isInvalid}>
                Log in
              </Button>
            </FormInputWrapper>
          </StyledForm>
          <div>
            <p>
              <Link to={MAIN_ROUTES["password-forget"]}>Forgot Password?</Link>
            </p>
          </div>
          <div>
            <p>
              Don't have an account?{" "}
              <Link to={MAIN_ROUTES.register}>Create one.</Link>
            </p>
          </div>
        </FormWrapper>
      </InnerWrapper>
    </Container>
  );
}

const LoginPage = withRouter(LoginPageComp);

export { LoginPage };
