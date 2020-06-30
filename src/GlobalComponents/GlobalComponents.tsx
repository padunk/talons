import styled from "styled-components";
import { BREAKPOINTS } from "../constants";

export const Container = styled.div<{
  height: string;
  background: string;
  heightXXL: string;
}>`
  width: 100vw;
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

export const MobileOnly = styled.span`
  @media ${BREAKPOINTS.lg} {
    display: none;
  }
`;
