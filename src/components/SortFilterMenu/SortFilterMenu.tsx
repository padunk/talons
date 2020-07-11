import * as React from "react";
import styled from "styled-components";
import {
  UnstyledButton,
  UnstyledInputText,
} from "../GlobalComponents/GlobalComponents";
import { COLORS, FONT_SIZES, BREAKPOINTS } from "../../constants/constants";
import { IoMdCloseCircleOutline } from "react-icons/io";

export function SortFilterMenu({
  toggleOptions,
  setToggleOptions,
  type,
}: {
  toggleOptions: boolean;
  setToggleOptions: Function;
  type: string;
}) {
  return (
    <OptionsContainer className={toggleOptions ? "show" : ""}>
      <div className='options-header'>
        <OptionsCloseWrapper>
          <UnstyledButton onClick={() => setToggleOptions(false)}>
            <IoMdCloseCircleOutline
              size='2.2rem'
              style={{ verticalAlign: "middle" }}
              fill={COLORS.red}
            />
          </UnstyledButton>
        </OptionsCloseWrapper>
      </div>
      {type === 'sort' ? (
        <div className='sort-options'>
          <form action='/sort' method='post'>
            <FormWrapper>
              <InputWrapper>
                <label htmlFor='sortProjectsBy'>Sort by:</label>
                <SortSelect name='sortProjectsBy' id='sortProjectsBy'>
                  <option value='new'>new</option>
                  <option value='popular'>popular</option>
                </SortSelect>
              </InputWrapper>
            </FormWrapper>
          </form>
        </div>
      ) : (
        <div className='filter-options'>
          <form action='/filter' method='post'>
            <FormWrapper>
              <InputWrapper>
                <label htmlFor='programming-language'>
                  Programming Language:{" "}
                </label>
                <OptionsInput
                  type='text'
                  name='programming-language'
                  id='programming-language'
                  placeholder='JavaScript'
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor='tags-name'>Tags: </label>
                <OptionsInput
                  type='text'
                  name='tags-name'
                  id='tags-name'
                  placeholder='ReactJS'
                />
              </InputWrapper>
              <InputWrapper>
                <div>Calendar: </div>
                <div>Calendar Form</div>
              </InputWrapper>
            </FormWrapper>
          </form>
        </div>
      )}
    </OptionsContainer>
  );
}

const OptionsInput = styled(UnstyledInputText)`
  font-size: ${FONT_SIZES.mdMin};
  background: ${COLORS.grayLight};

  @media ${BREAKPOINTS.mdMax} {
    font-size: ${FONT_SIZES.md};
  }
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;

  @media ${BREAKPOINTS.mdMax} {
    display: block;
  }
`;

const SortSelect = styled.select`
  padding: 8px 14px;
  font-family: inherit;
  font-size: inherit;
  text-transform: capitalize;
  border-radius: 2rem;
  border: none;
  outline: none;

  &:focus,
  &:hover {
    box-shadow: 0 0 6px 2px ${COLORS.secondaryLightAlpha};
  }
`;

const FormWrapper = styled.div`
  display: grid;
  row-gap: 1rem;

  @media ${BREAKPOINTS.mdMax} {
    display: flex;
    justify-content: space-around;
  }
`;

const OptionsCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;

  @media ${BREAKPOINTS.mdMax} {
    display: none;
  }
`;

const OptionsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  padding-bottom: 5rem;
  border-top: 2px solid ${COLORS.gray};
  background: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: ${FONT_SIZES.mdMin};
  opacity: 0;
  transform: translateX(-100%);

  &.show {
    opacity: 1;
    transform: translateX(0);
  }

  @media ${BREAKPOINTS.mdMax} {
    position: absolute;
    top: 6rem;
    bottom: auto;
  }
`;
