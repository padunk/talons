import React from "react";
import { Container, PlainLink } from "../GlobalComponents/GlobalComponents";
import styled from "styled-components";
import { SvgArrow } from "../SVG/Arrow";
import { Spacer } from "../Spacer/Spacer";
import { BREAKPOINTS, COLORS } from "../../constants";

const CATEGORIES = [
  { name: "web sites", path: "web-sites" },
  { name: "animations", path: "animations" },
  { name: "games", path: "games" },
  { name: "apps", path: "apps" },
  { name: "mobile", path: "mobile" },
];

export function CategoriesList() {
  const categoryList = React.useRef<HTMLUListElement>(null!);
  const forwardClick = () => {
    categoryList.current.scrollLeft += categoryList.current.clientWidth;
  };

  const backClick = () => {
    categoryList.current.scrollLeft -= categoryList.current.clientWidth;
  };

  return (
    <CatContainer>
      <CategoriesWrapper>
        <InnerWrapper>
          <Arrow className='left' onClick={backClick}>
            <SvgArrow
              width='100%'
              height='1.4rem'
              style={{ transform: "rotate(90deg)" }}
            />
          </Arrow>
          <Arrow className='right' onClick={forwardClick}>
            <SvgArrow
              width='100%'
              height='1.4rem'
              style={{ transform: "rotate(-90deg)" }}
            />
          </Arrow>
          <Spacer size='2rem' inline />
          <CatLists ref={categoryList}>
            {CATEGORIES.map(({ name, path }, idx) => (
              <CatList key={name + idx}>
                <PlainLink to={path}>{name}</PlainLink>
              </CatList>
            ))}
          </CatLists>
          <Spacer size='2rem' inline />
        </InnerWrapper>
      </CategoriesWrapper>
    </CatContainer>
  );
}

const CatList = styled.li`
  padding-right: 1rem;
  display: inline-block;
  text-transform: capitalize;

  @media ${BREAKPOINTS.md} {
    padding-right: 2rem;
  }
`;

const CatLists = styled.ul`
  list-style: none;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  font-size: 1.6rem;
  scroll-behavior: smooth;
  padding: 0 4rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Arrow = styled.span`
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.left {
    left: 0;
    background: linear-gradient(to left, transparent, ${COLORS.white} 30%);
  }

  &.right {
    right: 0;
    background: linear-gradient(to right, transparent, ${COLORS.white} 30%);
  }

  @media ${BREAKPOINTS.xs} {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  position: relative;

  @media ${BREAKPOINTS.xs} {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }
`;

const CategoriesWrapper = styled.div``;

const CatContainer = styled(Container)`
  position: sticky;
  top: 6rem;
  background: ${COLORS.white};
  z-index: 900;
`;
