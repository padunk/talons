import * as React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS, NAV_ROUTES } from "../../constants";
import { Link } from "react-router-dom";

export function NavMenu() {
  return (
    <React.Fragment>
      {NAV_ROUTES.map(({ name, path }) => {
        return (
          <NavMenuLists key={name}>
            <NavMenuList>
              <NavMenuLink to={path}>{name}</NavMenuLink>
            </NavMenuList>
          </NavMenuLists>
        );
      })}
    </React.Fragment>
  );
}

const NavMenuLink = styled(Link)`
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

const NavMenuList = styled.li`
  padding: 1rem 0;

  @media ${BREAKPOINTS.lg} {
    padding: 0 1rem;
  }
`;

const NavMenuLists = styled.ul`
  list-style-type: none;

  @media ${BREAKPOINTS.lg} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    order: 1;
  }
`;
