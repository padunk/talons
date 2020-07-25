import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { MAIN_ROUTES, FONT_SIZES, COLORS } from "../../constants/constants";
import { Container, UnstyledForm, UnstyledInputText } from "../GlobalComponents/GlobalComponents";
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
        <Wrapper>
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
        </Wrapper>
      </InnerWrapper>
    </Container>
  );
}

const FormInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: clamp(25rem, 100%, 100%);
`;

const StyledForm = styled(UnstyledForm)`
  display: grid;
  row-gap: 1rem;
`;

const ErrorDiv = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: indianred;
  font-weight: bold;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
  font-size: ${FONT_SIZES.mdMax};
  background-color: ${COLORS.grayLight};
  padding: 3rem;
  border-radius: 1rem;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  display: grid;
  place-items: center;
`;

const LoginPage = withRouter(LoginPageComp);

export { LoginPage };
