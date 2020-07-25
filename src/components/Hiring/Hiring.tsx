import React from "react";
import styled from "styled-components";
import { GrUpload } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { BREAKPOINTS, FONT_SIZES, COLORS } from "../../constants/constants";
import {
  UnstyledImg,
  SubHeader2,
  SubHeader3,
  UnstyledForm,
  NavSearch,
} from "../GlobalComponents/GlobalComponents";
import { Spacer } from "../Spacer/Spacer";
import hire from "../../assets/icons/hire.svg";
import { Button } from "../Buttons/Button";

export function Hiring() {
  return (
    <div>
      <MeetupsHeader>
        <MeetupsHeaderImage>
          <ImageWrapper>
            <Image src={hire} alt='blogs' loading='lazy' />
          </ImageWrapper>
        </MeetupsHeaderImage>
        <MeetupsHeaderText>
          <SubHeader2>The best site to hire the best Developer</SubHeader2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
            eu consequat ac felis donec et odio. Ac tortor dignissim convallis
            aenean et tortor at risus viverra. Egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec. Et sollicitudin ac
            orci phasellus egestas tellus.
          </p>
        </MeetupsHeaderText>
      </MeetupsHeader>
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

const MeetupsHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;

  @media ${BREAKPOINTS.md} {
    flex-wrap: nowrap;
    padding: 4rem;
  }
`;

const MeetupsHeaderText = styled.div`
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

const MeetupsHeaderImage = styled.div`
  padding: 1rem;

  @media ${BREAKPOINTS.md} {
    flex: 1;
    order: 1;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 1.5rem;

  @media ${BREAKPOINTS.md} {
    &.pass-meetup-image {
      width: 30rem;
    }
  }
`;

const Image = styled(UnstyledImg)`
  width: 100%;
  object-fit: cover;
`;

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
