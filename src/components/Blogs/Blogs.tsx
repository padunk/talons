import React from "react";
import styled from "styled-components";
import typewriter from "../../assets/icons/typewriter.svg";
import { BREAKPOINTS, FONT_SIZES, COLORS } from "../../constants/constants";
import {
  SubHeader2,
  SubHeader4,
  Header,
  HeaderImage,
  ImageWrapper,
  Image,
  HeaderText,
} from "../GlobalComponents/GlobalComponents";
import { Spacer } from "../Spacer/Spacer";

export function Blogs() {
  return (
    <div>
      <Header>
        <HeaderImage>
          <ImageWrapper>
            <Image src={typewriter} alt='blogs' loading='lazy' />
          </ImageWrapper>
        </HeaderImage>
        <HeaderText>
          <SubHeader2>Everyone can blogs</SubHeader2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
            eu consequat ac felis donec et odio. Ac tortor dignissim convallis
            aenean et tortor at risus viverra. Egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec. Et sollicitudin ac
            orci phasellus egestas tellus.
          </p>
        </HeaderText>
      </Header>
      <Spacer size='2rem' />
      <div>
        <PastMeetups>
          <ImageWrapper className='pass-meetup-image'>
            <Image
              src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
              alt='past-meetups'
            />
          </ImageWrapper>
          <MeetupsText>
            <div>
              <SubHeader4>Making Website with Just HTML and CSS</SubHeader4>
              <Author>
                <span>By: John Farrel</span> <span>July 13, 2020</span>
              </Author>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
            <Tag>
              Tag: <span>#HTML</span>
              <span>#CSS</span>
            </Tag>
          </MeetupsText>
        </PastMeetups>
        <PastMeetups>
          <ImageWrapper className='pass-meetup-image'>
            <Image
              src='https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
              alt='past-meetups'
            />
          </ImageWrapper>
          <MeetupsText>
            <div>
              <SubHeader4>Journey to JavaScript Universe</SubHeader4>
              <Author>
                <span>By: John Farrel</span> <span>July 13, 2020</span>
              </Author>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
            <Tag>
              Tag: <span>#JavaScript</span>
              <span>#ES6</span>
            </Tag>
          </MeetupsText>
        </PastMeetups>
        <PastMeetups>
          <ImageWrapper className='pass-meetup-image'>
            <Image
              src='https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
              alt='past-meetups'
            />
          </ImageWrapper>
          <MeetupsText>
            <div>
              <SubHeader4>Introduction to React Hooks's useEffect</SubHeader4>
              <Author>
                <span>By: Dan Smith</span> <span>July 1, 2020</span>
              </Author>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
            <Tag>
              Tag: <span>#ReactJS</span>
              <span>#Hooks</span>
              <span>#useEffect</span>
            </Tag>
          </MeetupsText>
        </PastMeetups>
      </div>
    </div>
  );
}

const PastMeetups = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.grayLight};

  @media ${BREAKPOINTS.sm} {
    display: flex;
  }

  @media ${BREAKPOINTS.md} {
    padding: 2rem;
  }
`;

const MeetupsText = styled.div`
  font-size: ${FONT_SIZES.mdMax};
  color: ${COLORS.grayText};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;

  @media ${BREAKPOINTS.sm} {
    padding-left: 2rem;
    max-width: 66rem;
  }
`;

const Author = styled.p`
  color: ${COLORS.grayTextMed};
  font-size: ${FONT_SIZES.mdMin};
`;

const Tag = styled.p`
  color: ${COLORS.grayTextMed};
  font-size: ${FONT_SIZES.mdMin};
`;
