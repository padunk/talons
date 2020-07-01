import * as React from 'react';
import styled from "styled-components";
import { BREAKPOINTS } from "../constants";

export const Container = styled.div<{
  height?: string;
  background?: string;
  heightXXL?: string;
}>`
  min-width: 100%;
  height: ${(props) => props.height};
  background: ${(props) => props.background};

  @media ${BREAKPOINTS.xxl} {
    height: ${(props) => props.heightXXL};
  }
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

export const UnstyledLabel = (props: any) => (
  <label {...props}>{props.children}</label>
);

export const UnstyledImg = (props: any) => <img {...props} alt={props.alt} />;
