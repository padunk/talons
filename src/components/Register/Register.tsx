import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

export function Register() {
  return <RegisterLink to='/enter/register'>Register</RegisterLink>;
}

const RegisterLink = styled(Link)`
  font-size: 1.8rem;
  font-family: inherit;
  text-decoration: none;
  background: ${COLORS.primary};
  padding: 6px 12px;
  border-radius: 1rem;
  transition: color 250ms;

  &:link,
  &:visited {
    color: ${COLORS.grayDark};
  }

  &:hover,
  &:active {
    color: ${COLORS.tertiary};
  }
`;
