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
import { COLORS } from "../../constants";
import { SortFilter } from "../SortFilter/SortFilter";

export function DisplayProjects() {
  return (
    <Container>
      <CategoriesList />
      <Spacer size='3rem' />
      <ProjectCard />
      <Spacer size='5rem' />
      <SortFilter />
    </Container>
  );
}
