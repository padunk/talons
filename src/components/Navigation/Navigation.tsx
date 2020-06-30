import * as React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS, BREAKPOINTS_SIZE } from "../../constants";
import logo from "../../assets/icons/talons.svg";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <NavWrapper>
      <Container>
        <MobileOnly>
          <HamburgerWrapper>
            <ToggleNavMenu
              type='checkbox'
              name='hamburger-menu'
              id='hamburger-menu'
              hidden
            />
            <Label htmlFor='hamburger-menu'>
              <HamburgerLine />
            </Label>
            <NavMenuWrapper>
              <NavSearchWrapper>
                <form action='/search/' method='post'>
                  <NavSearch
                    type='text'
                    name='nav-search'
                    id='nav-search'
                    placeholder='Search'
                  />
                </form>
              </NavSearchWrapper>
              <NavMenuLists>
                <NavMenuList>
                  <NavMenuLink to='/developpers'>Developers</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/projects'>Projects</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/meetups'>Meetups</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/blogs'>Blogs</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/hiring'>Hiring Developers</NavMenuLink>
                </NavMenuList>
              </NavMenuLists>
            </NavMenuWrapper>
          </HamburgerWrapper>
        </MobileOnly>
        <LogoWrapper>
          <LogoLink to='/'>
            <Logo src={logo} alt='talons.dev logo' />
          </LogoLink>
        </LogoWrapper>
        <ActionsWrapper>
          <DesktopOnly>
            <NavMenuWrapper>
              <NavSearchWrapper>
                <form action='/search/' method='post'>
                  <NavSearch
                    type='text'
                    name='nav-search'
                    id='nav-search'
                    placeholder='Search'
                  />
                </form>
              </NavSearchWrapper>
              <NavMenuLists>
                <NavMenuList>
                  <NavMenuLink to='/developpers'>Developers</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/projects'>Projects</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/meetups'>Meetups</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/blogs'>Blogs</NavMenuLink>
                </NavMenuList>
                <NavMenuList>
                  <NavMenuLink to='/hiring'>Hiring Developers</NavMenuLink>
                </NavMenuList>
              </NavMenuLists>
            </NavMenuWrapper>
          </DesktopOnly>
          <LogWrapper>
            <LogActions>
              <Login to='/enter/login'>Log in</Login>
            </LogActions>
            <DesktopOnly>
              <LogActions>
                <Register to='/enter/register'>Register</Register>
              </LogActions>
            </DesktopOnly>
          </LogWrapper>
        </ActionsWrapper>
      </Container>
    </NavWrapper>
  );
}

const DesktopOnly = styled.span`
  display: none;

  @media ${BREAKPOINTS.lg} {
    display: block;
  }
`;

const MobileOnly = styled.span`
  @media ${BREAKPOINTS.lg} {
    display: none;
  }
`;

const NavMenuLink = styled(Link)`
  font-size: 1.8rem;
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

  @media ${BREAKPOINTS.xxl} {
    font-size: 1.8rem;
  }
`;

const NavSearchWrapper = styled.div`
  @media ${BREAKPOINTS.lg} {
    order: 2;
    padding-left: 3rem;
    display: flex;
    align-items: center;
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
    width: auto;
    pointer-events: all;
    padding: 0;
  }
`;

const Login = styled(Link)`
  font-size: 1.8rem;
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
`;

const Register = styled(Link)`
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

const LogActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10rem;
`;

const LogWrapper = styled.div`
  height: 100%;
  min-width: 6rem;
  padding: 5px;

  @media ${BREAKPOINTS.lg} {
    display: flex;
    justify-content: space-around;
    max-width: 20rem;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 6rem;
  height: 100%;

  @media ${BREAKPOINTS.lg} {
    width: 100%;
    justify-content: space-between;
    padding-left: 2rem;
  }
`;

const UnstyledImg = (props: any) => <img {...props} alt={props.alt} />;

const Logo = styled(UnstyledImg)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LogoLink = styled(Link)`
  width: 100%;
  height: 100%;
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
    padding-left: 2rem;
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

const Container = styled.div`
  max-width: ${BREAKPOINTS_SIZE.xl}px;
  width: 100%;
  height: 6rem;
  padding-right: 2rem;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media ${BREAKPOINTS.lg} {
    transform: translateX(-50%);
    left: 50%;
    padding-right: 0;
  }

  @media ${BREAKPOINTS.xxl} {
    height: 8rem;
  }
`;

const NavWrapper = styled.nav`
  width: 100vw;
  height: 6rem;
  background: ${COLORS.white};

  @media ${BREAKPOINTS.xxl} {
    height: 8rem;
  }
`;
