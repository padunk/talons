import * as React from "react";
import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "../../constants/constants";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-width: 100%;
`;

export const DesktopOnly = styled.span`
  display: none;

  @media ${BREAKPOINTS.lg} {
    display: block;
  }
`;

export const BigTabletOnly = styled.span`
  display: none;

  @media ${BREAKPOINTS.mdMax} {
    display: block;
  }
`;

export const TabletAndUp = styled.span`
  display: none;

  @media ${BREAKPOINTS.md} {
    display: block;
  }
`;

export const MobileOnly = styled.span`
  @media ${BREAKPOINTS.lg} {
    display: none;
  }
`;

export const UnstyledLabel = (
  props: React.LabelHTMLAttributes<HTMLLabelElement>
) => <label {...props}>{props.children}</label>;

export const UnstyledInputText = styled.input`
  padding: 8px 14px;
  font-family: inherit;
  border-radius: 2rem;
  background: ${COLORS.grayLight};
  border: none;
  outline: none;

  &:focus,
  &:hover {
    box-shadow: 0 0 6px 2px ${COLORS.secondaryLightAlpha};
  }
`;

export const UnstyledImg = styled.img`
  display: block;
`

// export const UnstyledButton = (
//   props: React.ButtonHTMLAttributes<HTMLButtonElement>
// ) => <button {...props}>{props.children}</button>;

export const UnstyledForm = (
  props: React.FormHTMLAttributes<HTMLFormElement>
) => <form {...props}>{props.children}</form>;

export const UnstyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
`;

export const PlainLink = styled(Link)`
  font-size: 1.8rem;
  text-transform: capitalize;
  font-family: inherit;
  text-decoration: none;
  transition: color 250ms;

  &:link,
  &:visited {
    color: ${COLORS.grayDark};
  }

  &:hover,
  &:active {
    color: ${COLORS.tertiary};
  }

  @media ${BREAKPOINTS.xxl} {
    font-size: 2rem;
  }
`;
