import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../GlobalComponents/GlobalComponents";
import styled from "styled-components";
import { SvgArrow } from "../SVG/Arrow";
import { Spacer } from "../Spacer/Spacer";

const CATEGORIES = [
  { name: "web sites", path: "web-sites" },
  { name: "animations", path: "animations" },
  { name: "games", path: "games" },
  { name: "apps", path: "apps" },
  { name: "mobile", path: "mobile" },
];

export default function DisplayProjects() {
  const categoryList = React.useRef<HTMLUListElement>(null!);
  const forwardClick = () => {
    categoryList.current.scrollLeft += categoryList.current.clientWidth;
  };

  const backClick = () => {
    categoryList.current.scrollLeft -= categoryList.current.clientWidth;
  };

  return (
    <Container>
      <CategoriesWrapper>
        <InnerWrapper>
          <Arrow className='left' onClick={backClick}>
            <SvgArrow width='1.4rem' style={{ transform: "rotate(90deg)" }} />
          </Arrow>
          <Arrow className='right' onClick={forwardClick}>
            <SvgArrow width='1.4rem' style={{ transform: "rotate(-90deg)" }} />
          </Arrow>
          <Spacer size='2rem' inline />
          <CatLists ref={categoryList}>
            {CATEGORIES.map(({ name, path }, idx) => (
              <CatList key={name + idx}>
                <Link to={path}>{name}</Link>
              </CatList>
            ))}
          </CatLists>
          <Spacer size='2rem' inline />
        </InnerWrapper>
      </CategoriesWrapper>
      <div style={{ height: "100vh" }}></div>
    </Container>
  );
}

const CatList = styled.li`
  padding-right: 1rem;
  display: inline-block;
  text-transform: capitalize;
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
  
  &.left {
    left: 0;
    background: linear-gradient(to left, transparent, white 30%);
  }
  
  &.right {
    right: 0;
    background: linear-gradient(to right, transparent, white 30%);
  }
`;

const InnerWrapper = styled.div`
  position: relative;
`;

const CategoriesWrapper = styled.div`
  position: sticky;
  top: 6rem;
`;
