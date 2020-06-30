import * as React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../constants";
import logo from "../../assets/icons/talons.svg";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <NavWrapper>
      <MobileOnly>
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
            <NavSearchWrapper>
              <form action='/search/' method='post'>
                <NavSearch type='text' name='nav-search' id='nav-search' />
              </form>
            </NavSearchWrapper>
            <NavMenuLists>
              <NavMenuList>Developers</NavMenuList>
              <NavMenuList>Projects</NavMenuList>
              <NavMenuList>Meetups</NavMenuList>
              <NavMenuList>Blogs</NavMenuList>
              <NavMenuList>Hiring Developers</NavMenuList>
            </NavMenuLists>
          </NavMenuWrapper>
        </HamburgerWrapper>
      </MobileOnly>
      <LogoWrapper>
        <Logo src={logo} alt='talons.dev logo' />
      </LogoWrapper>
      <ActionsWrapper>
        <DesktopOnly>
          <NavMenuWrapper>
            <NavSearchWrapper>
              <form action='/search/' method='post'>
                <NavSearch type='text' name='nav-search' id='nav-search' />
              </form>
            </NavSearchWrapper>
            <NavMenuLists>
              <NavMenuList>Developers</NavMenuList>
              <NavMenuList>Projects</NavMenuList>
              <NavMenuList>Meetups</NavMenuList>
              <NavMenuList>Blogs</NavMenuList>
              <NavMenuList>Hiring Developers</NavMenuList>
            </NavMenuLists>
          </NavMenuWrapper>
        </DesktopOnly>
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

const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.sm} {
    display: none;
  }

  @media ${BREAKPOINTS.lg} {
    display: block;
  }
`;

const MobileOnly = styled.span`
  @media ${BREAKPOINTS.lg} {
    display: none;
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

const NavSearchWrapper = styled.div`
  @media ${BREAKPOINTS.lg} {
    order: 2;
    padding-left: 3rem;
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

  @media ${BREAKPOINTS.lg} {
    display: flex;
    justify-content: space-around;
    transform: translateY(0);
    opacity: 1;
    position: static;
    width: 100%;
    pointer-events: all;
    padding: 0;
  }
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

  @media ${BREAKPOINTS.lg} {
    width: 100%;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const UnstyledImg = (props: any) => <img {...props} alt={props.alt} />;

const Logo = styled(UnstyledImg)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  overflow: hidden;

  @media ${BREAKPOINTS.lg} {
    width: 20rem;
  }
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
    top: 1.5rem;
    width: 80%;
  }

  &::after {
    bottom: 1.5rem;
    width: 40%;
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
    width: 40%;
  }

  &:checked ~ ${Label} > ${HamburgerLine}::after {
    width: 80%;
  }
`;

const HamburgerWrapper = styled.div`
  min-width: 6rem;
  height: 6rem;
  padding: 5px;
  background: ${COLORS.black};
`;

const NavWrapper = styled.nav`
  width: 100vw;
  height: 6rem;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  background: ${COLORS.white};
`;
