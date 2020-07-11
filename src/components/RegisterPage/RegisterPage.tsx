import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { MAIN_ROUTES, FONT_SIZES, COLORS } from "../../constants/constants";
import { Container, UnstyledForm } from "../GlobalComponents/GlobalComponents";
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
      .then((authUser: any) => {
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
        <Wrapper>
          <div>
            <p>REGISTER</p>
          </div>
          <ErrorDiv>{error.message && <p>{error.message}</p>}</ErrorDiv>
          <StyledForm onSubmit={onSubmit}>
            <FormInputWrapper>
              <label htmlFor='user-nickname'>Username:</label>
              <input
                type='text'
                name='user-nickname'
                id='user-nickname'
                placeholder='superdev'
                onChange={(event) => setUserName(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-email'>Email:</label>
              <input
                type='text'
                name='user-email'
                id='user-email'
                placeholder='john@xyz.com'
                onChange={(event) => setUserEmail(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-password1'>Password:</label>
              <input
                type='password'
                name='user-password1'
                id='user-password1'
                placeholder='Password'
                onChange={(event) => setUserPassword(event?.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-password2'>Confirm password:</label>
              <input
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

const RegisterPage = withRouter(RegisterPageComp);

export { RegisterPage };
