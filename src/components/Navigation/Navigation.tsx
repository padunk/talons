import * as React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import logo from "../../assets/icons/talons.svg";
import { Link } from "react-router-dom";
import { prependOnceListener } from "process";

export function Navigation() {
  return (
    <NavWrapper>
      <HamburgerWrapper>
        <ToggleNavMenu
          type='checkbox'
          name='hamburger-menu'
          id='hamburger-menu'
          hidden
        />
        <Label htmlFor='hamburger-menu'>
          <HamburgerLine></HamburgerLine>
        </Label>
        <NavMenuWrapper>
          <div>
            <form action='/search/' method='post'>
              <NavSearch type='text' name='nav-search' id='nav-search' />
            </form>
          </div>
          <NavMenuLists>
            <NavMenuList>Developers</NavMenuList>
            <NavMenuList>Projects</NavMenuList>
            <NavMenuList>Meetups</NavMenuList>
            <NavMenuList>Blogs</NavMenuList>
            <NavMenuList>Hiring Developers</NavMenuList>
          </NavMenuLists>
        </NavMenuWrapper>
      </HamburgerWrapper>
      <LogoWrapper>
        <Logo src={logo} alt='talons.dev logo' />
      </LogoWrapper>
      <ActionsWrapper>
        {/** MENU component */}
        <LogWrapper>
          <LogActions display='none'>
            <Link to='/enter/register' hidden>
              Register
            </Link>
          </LogActions>
          <LogActions display='flex'>
            <Login to='/enter/login'>Log in</Login>
          </LogActions>
        </LogWrapper>
      </ActionsWrapper>
    </NavWrapper>
  );
}

const NavMenuList = styled.li`
  padding: 1rem 0;
`;

const NavMenuLists = styled.ul`
  list-style-type: none;
`;

const NavSearch = styled.input`
  padding: 8px 14px;
  font-size: 1.6rem;
  font-family: inherit;
  border-radius: 2rem;
  background: ${COLORS.grayLight};
  border: none;
  outline: none;

  &:focus,
  &:hover {
    border: 1px solid ${COLORS.secondary};
    box-shadow: 0 0 6px 2px ${COLORS.secondaryLightAlpha};
  }
`;

const NavMenuWrapper = styled.div`
  background: ${COLORS.white};
  width: 100vw;
  padding: 2rem;
  position: absolute;
  z-index: -1;
  left: 0;
  font-size: 1.8rem;
  opacity: 0;
  transform: translateY(-105%);
  will-change: transform;
  transition: transform 500ms ease-out, opacity 300ms;
  pointer-events: none;
`;

const Login = styled(Link)`
  font-size: 1.8rem;
  font-family: inherit;
  text-decoration: none;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${COLORS.gray};
  }
`;

const LogActions = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LogWrapper = styled.div`
  height: 100%;
  min-width: 6rem;
  padding: 5px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-width: 6rem;
  height: 100%;
`;

const UnstyledImg = (props: any) => <img {...props} alt={props.alt} />;

const Logo = styled(UnstyledImg)`
  width: 70%;
  height: auto;
  display: block;
  object-fit: contain;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UnstyledLabel = (props: any) => (
  <label {...props}>{props.children}</label>
);

const HamburgerLine = styled.span`
  height: 2px;
  background: ${COLORS.white};
  width: 60%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: ${COLORS.white};
    transition: width 300ms;
  }

  &::before {
    top: 1.2rem;
    width: 90%;
  }

  &::after {
    bottom: 1.2rem;
    width: 30%;
  }
`;

const Label = styled(UnstyledLabel)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleNavMenu = styled.input`
  display: none;

  &:checked ~ ${NavMenuWrapper} {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  &:checked ~ ${Label} > ${HamburgerLine}::before {
    width: 30%;
  }

  &:checked ~ ${Label} > ${HamburgerLine}::after {
    width: 90%;
  }
`;

const HamburgerWrapper = styled.div`
  min-width: 6rem;
  height: 100%;
  padding: 5px;
  background: ${COLORS.black};
`;

const NavWrapper = styled.nav`
  width: 100%;
  height: 6rem;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  background: ${COLORS.white};
`;
