import * as React from "react";
import styled from "styled-components";
import { UnstyledButton } from "../GlobalComponents/GlobalComponents";
import { COLORS } from "../../constants/constants";
import { GrFilter, GrSort } from "react-icons/gr";

export function Button(props: any) {
  switch (props.looks) {
    case "primary":
      return <ButtonPrimary {...props}>{props.children}</ButtonPrimary>;
    case "secondary":
      return <ButtonSecondary {...props}>{props.children}</ButtonSecondary>;
    case "tertiary":
      return <ButtonTertiary {...props}>{props.children}</ButtonTertiary>;
    default:
      return <StyledButton {...props}>{props.children}</StyledButton>;
  }
}

export function FilterButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <Button looks='secondary' {...props}>
      <GrFilter
        size='1.8rem'
        style={{ verticalAlign: "middle" }}
        stroke={COLORS.grayTextMed}
      />
    </Button>
  );
}

export function SortButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <Button looks='secondary' {...props}>
      <GrSort
        size='1.8rem'
        style={{ verticalAlign: "middle" }}
        stroke={COLORS.grayTextMed}
      />
    </Button>
  );
}

export const StyledButton = styled(UnstyledButton)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 1.4rem;
`;

const ButtonPrimary = styled(StyledButton)`
  background: ${COLORS.primary};

  &:hover {
    background: ${COLORS.primaryAlpha};
  }
`;

const ButtonSecondary = styled(StyledButton)`
  background: ${COLORS.white};

  &:hover {
    background: ${COLORS.whiteAlpha};
  }
`;

const ButtonTertiary = styled(StyledButton)`
  background: ${COLORS.tertiary};
  color: ${COLORS.white};

  &:hover {
    background: ${COLORS.tertiaryLight};
  }
`;
