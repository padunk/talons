import * as React from "react";
import styled from "styled-components";
import { HeroSVG } from "../SVG/HeroSVG";
import { BREAKPOINTS, COLORS, FONT_SIZES, FONTS } from "../../constants";
import {
  Container,
  TabletAndUp,
} from "../GlobalComponents/GlobalComponents";
import { Spacer } from "../Spacer/Spacer";
import { RegisterButton } from "../RegisterButton/RegisterButton";
import { SvgCurve } from "../SVG/SvgCurve";

export function Hero() {
  return (
    <HeroContainer>
      <SVGWrapper>
        <HeroSVG width='100%' height='100%' />
      </SVGWrapper>
      <OuterWrapper>
        <TextWrapper>
          <HeroText>Connect and show your projects to the world.</HeroText>
          <Spacer size='2rem' />
          <Text>
            Talons.dev is built for developers around the world to show their
            current exciting projects.
          </Text>
          <Text>
            Here you can connect with other developers and hire them for your
            special awesome projects.
          </Text>
          <Spacer size='2rem' />
          <RegisterButton />
        </TextWrapper>
      </OuterWrapper>
      <TabletAndUp>
        <StyledSvgCurve />
      </TabletAndUp>
    </HeroContainer>
  );
}

const StyledSvgCurve = styled(SvgCurve)`
  position: absolute;
  bottom: -1px;
  fill: white;
  transform: rotateY(180deg);
`;

const Text = styled.p`
  font-size: ${FONT_SIZES.md};
  color: ${COLORS.whiteAlpha};

  @media ${BREAKPOINTS.lg} {
    font-size: ${FONT_SIZES.mdMax};
  }
`;

const HeroText = styled.h2`
  font-size: ${FONT_SIZES.xl};
  font-family: ${FONTS.serif};
  color: ${COLORS.black};

  @media ${BREAKPOINTS.lg} {
    font-size: ${FONT_SIZES.xxl};
  }
`;

const TextWrapper = styled.div`
  padding: 3rem;
  text-align: center;
  max-width: 60rem;

  @media ${BREAKPOINTS.md} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
`;

const OuterWrapper = styled.div`
  background: linear-gradient(
    150deg,
    ${COLORS.secondaryLight},
    ${COLORS.tertiaryMedLight}
  );
  width: 80%;
  margin: 0 auto;
  margin-top: -7rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${BREAKPOINTS.xs} {
    margin-top: -4rem;
  }

  @media ${BREAKPOINTS.sm} {
    margin-top: -2rem;
  }

  @media ${BREAKPOINTS.md} {
    background: transparent;
    margin-top: 0;
    order: 1;
    flex: 2 1;
  }
`;

const SVGWrapper = styled.div`
  height: 60vh;
  padding: 0 2rem;

  @media ${BREAKPOINTS.md} {
    height: auto;
    order: 2;
    flex: 1 1;
  }

  @media ${BREAKPOINTS.lg} {
    padding-right: 8rem;
  }
`;

const HeroContainer = styled(Container)`
  position: relative;

  @media ${BREAKPOINTS.md} {
    height: 80vh;
    display: flex;
    background: linear-gradient(
      170deg,
      ${COLORS.secondaryLight},
      ${COLORS.secondaryMedLight},
      ${COLORS.tertiaryMedLight}
    );
  }
`;
