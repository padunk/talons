import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  UnstyledImg,
  UnstyledButton,
} from "../GlobalComponents/GlobalComponents";
import styled from "styled-components";
import { CategoriesList } from "../Categories/CategoriesList";
import { Spacer } from "../Spacer/Spacer";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { GrFilter, GrSort } from "react-icons/gr";
import { IconContext } from "react-icons";
import { COLORS } from "../../constants";

export function DisplayProjects() {
  return (
    <Container>
      <CategoriesList />
      <Spacer size='3rem' />
      {/* <ProjectCard /> */}
      <Spacer size='5rem' />
      <div className='control-wrapper'>
        <SortFilterWrapper>
          <SortFilterInner>
            <SortFilterButton>
              <GrSort
                size='1.8rem'
                style={{ verticalAlign: "middle" }}
                stroke={COLORS.grayTextMed}
              />
            </SortFilterButton>
          </SortFilterInner>
          <VerticalLineDivider />
          <SortFilterInner>
            <SortFilterButton>
              <GrFilter
                size='1.8rem'
                style={{ verticalAlign: "middle" }}
                stroke={COLORS.grayTextMed}
              />
            </SortFilterButton>
          </SortFilterInner>
        </SortFilterWrapper>
      </div>
    </Container>
  );
}

const VerticalLineDivider = styled.span`
  display: inline-block;
  height: 4.2rem;
  width: 1px;
  background: ${COLORS.grayTextMed};
`;

const SortFilterButton = styled(UnstyledButton)`
  text-align: center;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  padding: 1.2rem 1.4rem;
  background: ${COLORS.grayLight};

  &:hover {
    background: ${COLORS.whiteAlpha};
  }
`;

const SortFilterInner = styled.div`
  flex: 1 1;
`;

const SortFilterWrapper = styled.div`
  display: flex;
  border: 1px solid ${COLORS.grayTextMed};
  overflow: hidden;
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  border-radius: 2rem;
`;
