import * as React from "react";
import styled from "styled-components";
import {
  BREAKPOINTS,
  COLORS,
  FONT_SIZES,
  FONTS,
} from "../../constants/constants";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-width: 100%;
`;

export const DesktopOnly = styled.span`
  display: none;

  @media ${BREAKPOINTS.lg} {
    display: block;
  }
`;

export const BigTabletOnly = styled.span`
  display: none;

  @media ${BREAKPOINTS.mdMax} {
    display: block;
  }
`;

export const TabletAndUp = styled.span`
  display: none;

  @media ${BREAKPOINTS.md} {
    display: block;
  }
`;

export const MobileOnly = styled.span`
  @media ${BREAKPOINTS.lg} {
    display: none;
  }
`;

export const UnstyledLabel = (
  props: React.LabelHTMLAttributes<HTMLLabelElement>
) => <label {...props}>{props.children}</label>;

export const RawInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => <input {...props} />;

export const UnstyledInputText = styled(RawInput)`
  padding: 8px 14px;
  font-family: inherit;
  border-radius: 2rem;
  background: ${COLORS.grayLight};
  border: none;
  outline: none;

  &:focus,
  &:hover {
    box-shadow: 0 0 6px 2px ${COLORS.secondaryLightAlpha};
  }
`;

export const RawImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img {...props} />
);

export const UnstyledImg = styled(RawImage)`
  display: block;
`;

// export const UnstyledButton = (
//   props: React.ButtonHTMLAttributes<HTMLButtonElement>
// ) => <button {...props}>{props.children}</button>;

export const UnstyledForm = (
  props: React.FormHTMLAttributes<HTMLFormElement>
) => <form {...props}>{props.children}</form>;

export const UnstyledButton = styled.button`
  border: none;
  outline: ${COLORS.primaryAlphaLight};
  background: none;
`;

export const PlainLink = styled(Link)`
  font-size: 1.8rem;
  text-transform: capitalize;
  font-family: inherit;
  text-decoration: none;
  transition: color 250ms;

  &:link,
  &:visited {
    color: ${COLORS.grayDark};
  }

  &:hover,
  &:active {
    color: ${COLORS.tertiary};
  }

  @media ${BREAKPOINTS.xxl} {
    font-size: 2rem;
  }
`;

export const NavSearch = styled(UnstyledInputText)`
  font-size: 1.6rem;
  background: ${COLORS.grayLight};

  &:focus,
  &:hover {
    box-shadow: 0 0 6px 2px ${COLORS.secondaryLightAlpha};
  }

  @media ${BREAKPOINTS.xxl} {
    font-size: 1.8rem;
  }
`;

export const SubHeader2 = styled.h2`
  font-size: ${FONT_SIZES.xxl};
  color: ${COLORS.grayTextDark};
  font-family: ${FONTS.serif};
`;

export const SubHeader3 = styled.h3`
  font-size: ${FONT_SIZES.xl};
  color: ${COLORS.grayTextDark};
`;

export const SubHeader4 = styled.h4`
  color: ${COLORS.grayTextDark};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;

  @media ${BREAKPOINTS.md} {
    flex-wrap: nowrap;
    padding: 4rem;
  }
`;

export const HeaderText = styled.div`
  font-size: ${FONT_SIZES.md};
  text-align: justify;
  padding: 1rem;
  color: ${COLORS.grayTextMed};

  display: grid;
  justify-items: start;
  align-content: center;

  @media ${BREAKPOINTS.md} {
    flex: 1;
    order: 0;
  }
`;

export const HeaderImage = styled.div`
  padding: 1rem;

  @media ${BREAKPOINTS.md} {
    flex: 1;
    order: 1;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 1.5rem;

  @media ${BREAKPOINTS.md} {
    &.pass-meetup-image {
      width: 30rem;
    }
  }
`;

export const Image = styled(UnstyledImg)`
  width: 100%;
  object-fit: cover;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: clamp(25rem, 100%, 100%);

  label {
    padding-right: 1rem;
  }
`;

export const StyledForm = styled(UnstyledForm)`
  display: grid;
  row-gap: 1rem;
`;

export const ErrorDiv = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: indianred;
  font-weight: bold;
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
  font-size: ${FONT_SIZES.mdMax};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.grayDark};
  padding: 3rem;
  border-radius: 1rem;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  display: grid;
  place-items: center;
`;
