import React from "react";
import { Link, withRouter } from "react-router-dom";
import { MAIN_ROUTES } from "../../constants/constants";
import {
  Container,
  InnerWrapper,
  FormWrapper,
  ErrorDiv,
  StyledForm,
  FormInputWrapper,
  UnstyledInputText,
} from "../GlobalComponents/GlobalComponents";
import { Button } from "../Buttons/Button";
import { useFirebaseContext } from "../Firebase";
import { ErrorMessage } from "../../constants/interfaces";

function RegisterPageComp(props: any) {
  const [username, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [userPassword, setUserPassword] = React.useState<string>("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState<string>(
    ""
  );
  const [error, setError] = React.useState<ErrorMessage>({
    message: "",
  });
  const isInvalid =
    username === "" ||
    userEmail === "" ||
    userPassword === "" ||
    userPassword !== userConfirmPassword;
  const firebaseContext = useFirebaseContext();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firebaseContext
      .doCreateUserWithEmailAndPassword(userEmail, userPassword)
      .then((authUser: firebase.auth.UserCredential | null) => {
        // setUser
        console.log(authUser);
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        setUserConfirmPassword("");
        setError({
          message: "",
        });
        props.history.push(MAIN_ROUTES.home);
      })
      .catch((err: ErrorMessage) => setError({ message: err.message }));
  };

  // React.useEffect(() => {
  //   return () =>
  // }, [])

  return (
    <Container>
      <InnerWrapper>
        <FormWrapper>
          <div>
            <p>REGISTER</p>
          </div>
          <ErrorDiv>{error.message && <p>{error.message}</p>}</ErrorDiv>
          <StyledForm onSubmit={onSubmit}>
            <FormInputWrapper>
              <label htmlFor='user-nickname'>Username:</label>
              <UnstyledInputText
                type='text'
                name='user-nickname'
                id='user-nickname'
                placeholder='superdev'
                onChange={(event) => setUserName(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-email'>Email:</label>
              <UnstyledInputText
                type='text'
                name='user-email'
                id='user-email'
                placeholder='john@xyz.com'
                onChange={(event) => setUserEmail(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-password1'>Password:</label>
              <UnstyledInputText
                type='password'
                name='user-password1'
                id='user-password1'
                placeholder='Password'
                onChange={(event) => setUserPassword(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-password2'>Confirm password:</label>
              <UnstyledInputText
                type='password'
                name='user-password2'
                id='user-password2'
                placeholder='Confirm password'
                onChange={(event) =>
                  setUserConfirmPassword(event?.target.value)
                }
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <Button type='submit' looks='primary' disabled={isInvalid}>
                Register
              </Button>
            </FormInputWrapper>
          </StyledForm>
          <div>
            <p>
              Already have an account?{" "}
              <Link to={MAIN_ROUTES.login}>Log in</Link>
            </p>
          </div>
        </FormWrapper>
      </InnerWrapper>
    </Container>
  );
}

const RegisterPage = withRouter(RegisterPageComp);

export { RegisterPage };
