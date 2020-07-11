import * as React from "react";
import styled from "styled-components";
import { UnstyledButton } from "../GlobalComponents/GlobalComponents";
import { COLORS } from "../../constants";
import { GrFilter, GrSort } from "react-icons/gr";

export function Button(props: any) {
  if (props.looks === "primary") {
    return <ButtonPrimary {...props}>{props.children}</ButtonPrimary>;
  }
  return <ButtonSecondary {...props}>{props.children}</ButtonSecondary>;
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

const ButtonSecondary = styled(UnstyledButton)`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 1.2rem 1.4rem;
  background: ${COLORS.white};

  &:hover {
    background: ${COLORS.whiteAlpha};
  }
`;

const ButtonPrimary = styled(UnstyledButton)`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 1.2rem 1.4rem;
  background: ${COLORS.primary};

  &:hover {
    background: ${COLORS.primaryAlpha};
  }
`;
