import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/constants";
import { FaPlus } from "react-icons/fa";

interface Props {}

export function FixedRoundButton({}: Props): ReactElement {
  return (
    <RoundButton>
      <Link to='/add-project'>
        <FaPlus size='2rem' />
      </Link>
    </RoundButton>
  );
}

const RoundButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 6rem;
  height: 6rem;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: none;
  border-radius: 100%;
  background: linear-gradient(
    to bottom right,
    ${COLORS.primaryLight},
    ${COLORS.primaryDark}
  );
  transition: background 300ms ease-in-out;

  &:hover {
    background: linear-gradient(
      to bottom right,
      ${COLORS.secondaryLight},
      ${COLORS.tertiaryLight}
    );
  }

  a {
    color: ${COLORS.grayTextLight};
    padding: 2rem;
  }
`;
