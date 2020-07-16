import React from "react";
import styled from "styled-components";
import USER_DATA from "../../mockData/USER_DATA.json";
import PROJECTS_DATA from "../../mockData/PROJECTS_DATA.json";
import {
  NavSearch,
  UnstyledLabel,
  UnstyledForm,
  UnstyledImg,
} from "../GlobalComponents/GlobalComponents";
import { FONT_SIZES, COLORS, BREAKPOINTS } from "../../constants/constants";
import { Button } from "../Buttons/Button";
import { Spacer } from "../Spacer/Spacer";

export function Developers() {
  return (
    <div>
      <DevSearch>
        <DevSearchForm action='' method='post'>
          <InputWrapper className='input-text'>
            <Label htmlFor='skill'>Search by Skill</Label>
            <NavSearch
              type='text'
              name='nav-search'
              id='dev-search-skill'
              placeholder='jQuery, PHP'
            />
          </InputWrapper>
          <InputWrapper className='input-text'>
            <Label htmlFor='location'>Search by Location</Label>
            <NavSearch
              type='text'
              name='location'
              id='dev-search-locaiton'
              placeholder='Padang, Indonesia'
            />
          </InputWrapper>
          <InputWrapper>
            <Button type='submit' looks='primary'>
              Search
            </Button>
          </InputWrapper>
        </DevSearchForm>
      </DevSearch>

      <DevSearchResultContainer>
        <DevCard>
          <DevInfoContainer>
            <AvatarWrapper>
              <Avatar src={USER_DATA[0].avatar} alt={USER_DATA[0].first_name} />
            </AvatarWrapper>
            <div className='dev-info'>
              <DevInfoWrapper>
                <h2>
                  {USER_DATA[0].first_name} {USER_DATA[0].last_name}
                </h2>
                <p>Followers: {USER_DATA[0].connections}</p>
              </DevInfoWrapper>
              <DevInfoWrapper className='dev-company'>
                <span>Company: {USER_DATA[0].last_name}.co</span>
                <span>{USER_DATA[0].first_name}@talons.dev</span>
              </DevInfoWrapper>
              <DevBio>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec massa sapien faucibus et molestie ac feugiat sed.
              </DevBio>
            </div>
            <div>
              <Button looks='primary'>Hire Me</Button>
            </div>
            <Spacer size='2rem' />
          </DevInfoContainer>
          <ProjectsCarousel>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
          </ProjectsCarousel>
        </DevCard>
        <DevCard>
          <DevInfoContainer>
            <AvatarWrapper>
              <Avatar src={USER_DATA[1].avatar} alt={USER_DATA[1].first_name} />
            </AvatarWrapper>
            <div className='dev-info'>
              <DevInfoWrapper>
                <h2>
                  {USER_DATA[1].first_name} {USER_DATA[1].last_name}
                </h2>
                <p>Followers: {USER_DATA[1].connections}</p>
              </DevInfoWrapper>
              <DevInfoWrapper className='dev-company'>
                <span>Company: {USER_DATA[1].last_name}.co</span>
                <span>{USER_DATA[1].first_name}@talons.dev</span>
              </DevInfoWrapper>
              <DevBio>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec massa sapien faucibus et molestie ac feugiat sed.
              </DevBio>
            </div>
            <div>
              <Button looks='primary'>Hire Me</Button>
            </div>
            <Spacer size='2rem' />
          </DevInfoContainer>
          <ProjectsCarousel>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
          </ProjectsCarousel>
        </DevCard>
        <DevCard>
          <DevInfoContainer>
            <AvatarWrapper>
              <Avatar src={USER_DATA[2].avatar} alt={USER_DATA[2].first_name} />
            </AvatarWrapper>
            <div className='dev-info'>
              <DevInfoWrapper>
                <h2>
                  {USER_DATA[2].first_name} {USER_DATA[2].last_name}
                </h2>
                <p>Followers: {USER_DATA[2].connections}</p>
              </DevInfoWrapper>
              <DevInfoWrapper className='dev-company'>
                <span>Company: {USER_DATA[2].last_name}.co</span>
                <span>{USER_DATA[2].first_name}@talons.dev</span>
              </DevInfoWrapper>
              <DevBio>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec massa sapien faucibus et molestie ac feugiat sed.
              </DevBio>
            </div>
            <div>
              <Button looks='primary'>Hire Me</Button>
            </div>
            <Spacer size='2rem' />
          </DevInfoContainer>
          <ProjectsCarousel>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
            <ImgWrapper>
              <ProjectImg
                src={`https://picsum.photos/600/450.webp?random=${Math.random() *
                  10 +
                  1}`}
                alt='project'
                loading='lazy'
                width='300'
              />
            </ImgWrapper>
          </ProjectsCarousel>
        </DevCard>
      </DevSearchResultContainer>
    </div>
  );
}

const DevSearch = styled.div`
  font-size: ${FONT_SIZES.md};
  padding: 2rem;
`;

const DevSearchForm = styled(UnstyledForm)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 90%;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  display: grid;
  padding: 1rem;

  &.input-text {
    flex: 2 1;
  }
`;

const Label = styled(UnstyledLabel)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DevSearchResultContainer = styled.div`
  width: 100%;
`;

const DevCard = styled.div`
  width: 100%;
  padding: 2rem;
  display: grid;
  border-bottom: 1px solid ${COLORS.grayLight};

  @media ${BREAKPOINTS.mdMax} {
    grid-template-columns: 1fr 3fr;
  }
`;

const DevInfoContainer = styled.div`
  padding: 1rem;
`

const AvatarWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Avatar = styled(UnstyledImg)`
  width: 6rem;
  height: 6rem;
`;

const DevInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: ${FONT_SIZES.sm};

  &.dev-company {
    color: ${COLORS.grayTextMed};
  }
`;

const DevBio = styled.p`
  font-size: ${FONT_SIZES.mdMin};
  padding: 1rem 0;
`;

const ProjectsCarousel = styled.div`
  display: flex;
  overflow-x: auto;
`;

const ImgWrapper = styled.div`
  border-radius: 1rem;
  background-color: ${COLORS.grayLight};
  margin-left: 1rem;
  min-width: 20rem;
  overflow: hidden;
`;

const ProjectImg = styled(UnstyledImg)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
