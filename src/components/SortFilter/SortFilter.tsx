import * as React from "react";
import styled from "styled-components";
import { GrFilter, GrSort } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { COLORS, BREAKPOINTS, FONT_SIZES } from "../../constants";
import {
  UnstyledButton,
  UnstyledInputText,
} from "../GlobalComponents/GlobalComponents";

export function SortFilter() {
  const [toggleOptions, setToggleOptions] = React.useState(false);
  const [sort, setSort] = React.useState(false);
  const toggleOptionsRef = React.useRef<HTMLDivElement>(null);

  const showFilterOptions = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    const type = event.currentTarget.dataset.type;
    if (type === "sort") {
      setSort(true);
    } else {
      setSort(false);
    }

    setToggleOptions((opts) => !opts);
  };

  return (
    <div className='control-wrapper' style={{ position: "relative" }}>
      <SortFilterWrapper>
        <SortFilterInner>
          <SortFilterButton data-type='sort' onClick={showFilterOptions}>
            <GrSort
              size='1.8rem'
              style={{ verticalAlign: "middle" }}
              stroke={COLORS.grayTextMed}
            />
          </SortFilterButton>
        </SortFilterInner>
        <VerticalLineDivider />
        <SortFilterInner>
          <SortFilterButton data-type='filter' onClick={showFilterOptions}>
            <GrFilter
              size='1.8rem'
              style={{ verticalAlign: "middle" }}
              stroke={COLORS.grayTextMed}
            />
          </SortFilterButton>
        </SortFilterInner>
      </SortFilterWrapper>
      <OptionsContainer
        ref={toggleOptionsRef}
        className={toggleOptions ? "show" : ""}>
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
        {sort ? (
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
                    Programming Language
                  </label>
                  <OptionsInput
                    type='text'
                    name='programming-language'
                    id='programming-language'
                    placeholder='JavaScript'
                  />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor='tags-name'>Tags</label>
                  <OptionsInput
                    type='text'
                    name='tags-name'
                    id='tags-name'
                    placeholder='ReactJS'
                  />
                </InputWrapper>
                <InputWrapper>
                  <div>Calendar</div>
                  <div>Calendar Form</div>
                </InputWrapper>
              </FormWrapper>
            </form>
          </div>
        )}
      </OptionsContainer>
    </div>
  );
}

const OptionsInput = styled(UnstyledInputText)`
  font-size: 1.4rem;
  background: ${COLORS.grayLight};
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
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
`;

const OptionsCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 0;
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
`;

const VerticalLineDivider = styled.span`
  display: inline-block;
  height: 4.2rem;
  width: 1px;
  background: ${COLORS.grayTextMed};
`;

const SortFilterButton = styled(UnstyledButton)`
  text-align: center;
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
