import * as React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

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
      <div className='logo'>LOGO</div>
      {/* <div className='nav-menu'></div>
      <div className='search'></div> */}
      <ActionsWrapper>
        <div className='menu'></div>
        <div className='search'></div>
        <div className='log'></div>
      </ActionsWrapper>
    </NavWrapper>
  );
}

const UnstyledLabel = (props: any) => (
  <label {...props}>{props.children}</label>
);

const ActionsWrapper = styled.div`
  display: flex;
`;

const HamburgerLine = styled.span`
  width: 100%;
  height: 2px;
  background: ${COLORS.white};
  width: 70%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: ${COLORS.white};
  }

  &::before {
    top: 1rem;
    width: 100%;
  }

  &::after {
    bottom: 1rem;
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
`;

const HamburgerWrapper = styled.div`
  width: 6rem;
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
  background: beige;
  border: 1px solid crimson;
`;
