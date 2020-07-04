import * as React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../constants";
import { FilterButton, SortButton } from "../Buttons/Button";
import { SortFilterMenu } from "../SortFilterMenu/SortFilterMenu";

export function SortFilter() {
  const [toggleOptions, setToggleOptions] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>("");

  const showFilterOptions = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ): void => {
    const selectType: string = event.currentTarget.dataset.type!;
    if (toggleOptions && type === selectType) {
      setToggleOptions(false);
    } else if (toggleOptions && type !== selectType) {
      setType(selectType);
    } else {
      setType(selectType);
      setToggleOptions((opts) => !opts);
    }
  };

  return (
    <Wrapper>
      <SortFilterWrapper>
        <SortFilterInner>
          <SortButton data-type='sort' onClick={showFilterOptions} />
        </SortFilterInner>
        <VerticalLineDivider />
        <SortFilterInner>
          <FilterButton data-type='filter' onClick={showFilterOptions} />
        </SortFilterInner>
      </SortFilterWrapper>
      <SortFilterMenu
        toggleOptions={toggleOptions}
        setToggleOptions={setToggleOptions}
        type={type}
      />
    </Wrapper>
  );
}

const VerticalLineDivider = styled.span`
  display: inline-block;
  height: 4.2rem;
  width: 1px;
  background: ${COLORS.grayTextMed};
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

const Wrapper = styled.div`
  position: relative;

  @media ${BREAKPOINTS.mdMax} {
    display: none;
  }
`;
