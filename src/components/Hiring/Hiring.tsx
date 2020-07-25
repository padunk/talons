import React from "react";
import styled from "styled-components";
import { GrUpload } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { BREAKPOINTS, FONT_SIZES } from "../../constants/constants";
import {
  SubHeader2,
  SubHeader3,
  UnstyledForm,
  NavSearch,
  Header,
  HeaderImage,
  ImageWrapper,
  Image,
  HeaderText,
} from "../GlobalComponents/GlobalComponents";
import { Spacer } from "../Spacer/Spacer";
import hire from "../../assets/icons/hire.svg";
import { Button } from "../Buttons/Button";

export function Hiring() {
  return (
    <div>
      <Header>
        <HeaderImage>
          <ImageWrapper>
            <Image src={hire} alt='blogs' loading='lazy' />
          </ImageWrapper>
        </HeaderImage>
        <HeaderText>
          <SubHeader2>The best site to hire the best Developer</SubHeader2>
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
      <ListingContainer>
        <SubHeader3>Create Your Job Listing</SubHeader3>
        <Spacer size='2rem' />
        <StyledForm action='' method='post'>
          <FormInputWrapper>
            <label htmlFor='job-title'>Job Title</label>
            <NavSearch type='text' name='job-title' id='job-title' />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='company'>Company</label>
            <NavSearch type='text' name='company' id='company' />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='location'>Location</label>
            <NavSearch
              type='text'
              name='location'
              id='location'
              placeholder='City, Country, or Remote'
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <div>
              <p>Job Description</p>
              <p>
                <small>Upload your job description file</small>
              </p>
            </div>
            <Button type='button' looks='secondary'>
              <GrUpload />
            </Button>
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='location'>Link to apply</label>
            <NavSearch type='url' name='apply-link' id='apply-link' />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='location'>Video or Image link</label>
            <NavSearch type='url' name='media-link' id='media-link' />
          </FormInputWrapper>
          <FormDoubleCTAButton>
            <Button type='button' looks='primary'>
              Preview
            </Button>
            <Button type='submit' looks='tertiary'>
              <IoIosSend />
              Post Job
            </Button>
          </FormDoubleCTAButton>
        </StyledForm>
      </ListingContainer>
      <Spacer size='3rem' />
    </div>
  );
}

const ListingContainer = styled.div`
  padding: 1rem;

  @media ${BREAKPOINTS.sm} {
    padding-left: 4rem;
  }
`;

const StyledForm = styled(UnstyledForm)`
  max-width: 66rem;
  display: grid;
  row-gap: 1rem;
  font-size: ${FONT_SIZES.md};
`;

const FormInputWrapper = styled.div`
  display: grid;
  padding: 2px 1rem;
  width: clamp(25rem, 100%, 100%);

  @media ${BREAKPOINTS.sm} {
    grid-template-columns: 1fr 2fr;
  }
`;

const FormDoubleCTAButton = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(10rem, 1fr));
  column-gap: 2rem;

  @media ${BREAKPOINTS.sm} {
    column-gap: 5rem;
  }
`;
