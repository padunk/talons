import React from "react";
import { Link } from "react-router-dom";
import { Container, UnstyledImg } from "../GlobalComponents/GlobalComponents";
import styled from "styled-components";
import { CategoriesList } from "../Categories/CategoriesList";
import USER_DATA from "../../mockData/USER_DATA.json";
import PROJECTS_DATA from "../../mockData/PROJECTS_DATA.json";
import { Spacer } from "../Spacer/Spacer";
import { BREAKPOINTS, FONT_SIZES, FONTS, COLORS } from "../../constants";
import { SvgComments } from "../SVG/Comments";
import { SvgHeart } from "../SVG/Heart";
import { SvgFrame } from "../SVG/Frame";

export function DisplayProjects() {
  return (
    <Container>
      <CategoriesList />
      <Spacer size='3rem' />
      <GridContainerOuter>
        <div>
          <GridContainerInner>
            {USER_DATA.map((data, idx) => (
              <CardWrapper key={data.id}>
                <div className='card-wrapper--inner'>
                  <div className='picture' style={{position: 'relative'}}>
                    <picture>
                      <source
                        srcSet={`https://picsum.photos/1200/900.webp?random=${idx}`}
                        media='(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)'
                      />
                      <source
                        srcSet={`https://picsum.photos/800/600.webp?random=${idx}`}
                        media='(min-width: 1440px)'
                      />
                      <ProjectImg
                        src={`https://picsum.photos/600/450.webp?random=${idx}`}
                        alt='project'
                        loading='lazy'
                        width='600'
                      />
                    </picture>
                    <StyledFrame />
                  </div>
                  <CardFooter>
                    <UserData>
                      <AvatarWrapper>
                        <img
                          src={data.avatar}
                          alt={data.first_name}
                          width='30'
                          height='30'
                          loading='lazy'
                        />
                      </AvatarWrapper>
                      <div className='user-name'>
                        <UserName>
                          {data.first_name} {data.last_name}
                        </UserName>
                      </div>
                    </UserData>
                    <ProjectsData>
                      <IconsWrapper>
                        <SvgComments
                          width='1.4rem'
                          fill={COLORS.grayTextLight}
                        />
                        <ProjectCount>
                          {PROJECTS_DATA[idx].comments_count}
                        </ProjectCount>
                      </IconsWrapper>
                      <IconsWrapper>
                        <SvgHeart width='1.4rem' fill={COLORS.grayTextLight} />
                        <ProjectCount>{PROJECTS_DATA[idx].likes}</ProjectCount>
                      </IconsWrapper>
                    </ProjectsData>
                  </CardFooter>
                </div>
              </CardWrapper>
            ))}
          </GridContainerInner>
        </div>
      </GridContainerOuter>
    </Container>
  );
}

const StyledFrame = styled(SvgFrame)`
  position: absolute;
  top: 0;
  left: 0;
  fill: white;
`

const ProjectCount = styled.span`
  padding-left: 5px;
`;

const IconsWrapper = styled.div`
  flex: 1 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: ${FONT_SIZES.mdMin};
`;

const ProjectsData = styled.div`
  flex: 1 1;
  display: flex;
  color: ${COLORS.grayTextMed};
`;

const UserName = styled.h4`
  font-family: ${FONTS.serif};
  font-size: ${FONT_SIZES.mdMin};
`;

const AvatarWrapper = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
  box-shadow: inset 0 0 0 2px black;
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  flex: 2 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const ProjectImg = styled(UnstyledImg)`
  width: 100%;
  object-fit: cover;
`;

const CardWrapper = styled.li`
  overflow: hidden;
`;

const GridContainerInner = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  grid-auto-flow: dense;
  column-gap: 2rem;
  row-gap: 3rem;
  padding: 0 1rem;

  @media ${BREAKPOINTS.xs} {
    padding: 0 2rem;
  }
`;

const GridContainerOuter = styled.div``;
