import * as React from "react";
import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { useFirebaseContext } from "../Firebase";
import { COLORS } from "../../constants/constants";

export function LogoutButton() {
  const firebaseContext = useFirebaseContext();

  return (
    <StyledLogoutButton type='button' onClick={firebaseContext.doSignOut}>
      Log out
    </StyledLogoutButton>
  );
}

const StyledLogoutButton = styled(Button)`
  font-size: 1.8rem;
  font-family: inherit;
  transition: color 250ms;
  padding: 0;

  &:link,
  &:visited {
    color: ${COLORS.grayDark};
  }

  &:hover,
  &:active {
    color: ${COLORS.tertiary};
  }
`;
