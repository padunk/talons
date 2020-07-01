import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

export function Register() {
  return <RegisterLink to='/enter/register'>Register</RegisterLink>;
}

const RegisterLink = styled(Link)`
  max-width: 10rem;
  text-align: center;
  font-size: 1.8rem;
  font-family: inherit;
  text-decoration: none;
  background: ${COLORS.primary};
  padding: 6px 12px;
  border-radius: 7px;
  transition: color 250ms, background 250ms ease-out;

  &:link,
  &:visited {
    color: ${COLORS.grayDark};
  }

  &:hover,
  &:active {
    color: ${COLORS.tertiary};
    background: ${COLORS.primaryAlphaLight};
  }
`;
