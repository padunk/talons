import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MAIN_ROUTES, FONT_SIZES, COLORS } from "../../constants/constants";
import { Container } from "../GlobalComponents/GlobalComponents";
import { Button } from "../Buttons/Button";

export function LoginPage() {
  return (
    <Container>
      <InnerWrapper>
        <Wrapper>
          <div>
            <p>LOGIN</p>
          </div>
          <StyledForm action='' method='post'>
            <FormInputWrapper>
              <label htmlFor='user-email'>Email:</label>
              <input type='text' name='user-email' id='user-email' />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='user-password'>Password:</label>
              <input type='text' name='user-password' id='user-password' />
            </FormInputWrapper>
            <FormInputWrapper>
              <Button type='submit' looks='primary'>
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

const StyledForm = styled.form`
  display: grid;
  row-gap: 1rem;
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
