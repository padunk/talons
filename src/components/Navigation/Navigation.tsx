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
        <input
          type='checkbox'
          name='hamburger-menu'
          id='hamburger-menu'
          hidden
        />
        <Label htmlFor='hamburger-menu'>
          <HamburgerLine></HamburgerLine>
        </Label>
      </HamburgerWrapper>
      <LogoWrapper>
        <Logo src={logo} alt='talons.dev logo' />
      </LogoWrapper>
      {/* <div className='nav-menu'></div>
      <div className='search'></div> */}
      <ActionsWrapper>
        <div className='menu' hidden>
          Menu
        </div>
        <div className='search' hidden>
          Search
        </div>
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
