import React from "react";
import styled from "styled-components";
import { FONT_SIZES, BREAKPOINTS, COLORS } from "../../constants/constants";
import { Button } from "../Buttons/Button";
import { Spacer } from "../Spacer/Spacer";
import {
  SubHeader2,
  SubHeader4,
  Header,
  HeaderImage,
  ImageWrapper,
  Image,
  HeaderText,
} from "../GlobalComponents/GlobalComponents";

export function Meetups() {
  return (
    <div>
      <Header>
        <HeaderImage>
          <ImageWrapper>
            <Image
              src='https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
              alt='meetups at the pool'
              loading='lazy'
            />
          </ImageWrapper>
        </HeaderImage>
        <HeaderText>
          <SubHeader2>Join our Meetups around the world.</SubHeader2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
            eu consequat ac felis donec et odio. Ac tortor dignissim convallis
            aenean et tortor at risus viverra. Egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec. Et sollicitudin ac
            orci phasellus egestas tellus.
          </p>
          <Spacer size='1rem' />
          <Button type='button' looks='primary'>
            Host a Meetup
          </Button>
        </HeaderText>
      </Header>
      <div className='past-meetups'>
        <MeetupsSubHeader>Recent meetups compilation</MeetupsSubHeader>
        <PastMeetups>
          <ImageWrapper className='pass-meetup-image'>
            <Image
              src='https://images.unsplash.com/photo-1559223607-180d0c16c333?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              alt='past-meetups'
            />
          </ImageWrapper>
          <MeetupsText>
            <SubHeader4>Production Meetups</SubHeader4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
          </MeetupsText>
        </PastMeetups>
        <PastMeetups>
          <ImageWrapper className='pass-meetup-image'>
            <Image
              src='https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
              alt='past-meetups'
            />
          </ImageWrapper>
          <MeetupsText>
            <SubHeader4>Outdoor Meetups</SubHeader4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
          </MeetupsText>
        </PastMeetups>
        <PastMeetups>
          <ImageWrapper className='pass-meetup-image'>
            <Image
              src='https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              alt='past-meetups'
            />
          </ImageWrapper>
          <MeetupsText>
            <SubHeader4>Foodie Meetups</SubHeader4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
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
`;

const MeetupsSubHeader = styled.h3`
  font-size: ${FONT_SIZES.lg};
  padding: 5px 1rem;
  color: ${COLORS.grayTextDark};
`;

const MeetupsText = styled.div`
  font-size: ${FONT_SIZES.mdMax};
  color: ${COLORS.grayTextMed};

  @media ${BREAKPOINTS.sm} {
    padding-left: 2rem;
    max-width: 66rem;
  }
`;
