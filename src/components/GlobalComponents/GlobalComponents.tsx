import * as React from "react";
import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "../../constants";
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

export const UnstyledImg = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img {...props} alt={props.alt} />;

export const UnstyledButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => <button {...props}>{props.children}</button>;

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
