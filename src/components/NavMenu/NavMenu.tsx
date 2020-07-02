import * as React from "react";
import styled from "styled-components";
import { BREAKPOINTS, NAV_ROUTES } from "../../constants";
import { PlainLink } from "../GlobalComponents/GlobalComponents";

export function NavMenu() {
  return (
    <React.Fragment>
      {NAV_ROUTES.map(({ name, path }) => {
        return (
          <NavMenuLists key={name}>
            <NavMenuList>
              <PlainLink to={path}>{name}</PlainLink>
            </NavMenuList>
          </NavMenuLists>
        );
      })}
    </React.Fragment>
  );
}

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
