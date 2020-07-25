import React from "react";
import styled from "styled-components";
import { BREAKPOINTS, FONT_SIZES, COLORS } from "../../constants/constants";
import {
  UnstyledImg,
  SubHeader2,
  UnstyledForm,
} from "../GlobalComponents/GlobalComponents";
import profile from "../../assets/icons/profile.svg";
import avatar from "../../assets/icons/male_avatar.svg";
import { Button } from "../Buttons/Button";
import { Spacer } from "../Spacer/Spacer";

export function UserAccountPage(props: any) {
  const { displayName, email, phoneNumber, photoURL } = props.authUser;
  // console.log(props);

  return (
    <div>
      <MeetupsHeader>
        <MeetupsHeaderImage>
          <ImageWrapper>
            <Image src={profile} alt='blogs' loading='lazy' />
          </ImageWrapper>
        </MeetupsHeaderImage>
        <Spacer size='2rem' />
        <MeetupsHeaderText>
          <SubHeader2>{displayName} Secure Account</SubHeader2>
          <ImageWrapper className='avatar'>
            <Image
              src={photoURL ? photoURL : avatar}
              alt={`${displayName} picture profile`}
            />
          </ImageWrapper>
          <div>
            <StyledForm action='' method='post'>
              <FormInputWrapper>
                <label htmlFor='user-name'>Name: </label>
                <input
                  type='text'
                  name='user-name'
                  id='user-name'
                  defaultValue={displayName}
                />
              </FormInputWrapper>
              <FormInputWrapper>
                <label htmlFor='user-email'>Email: </label>
                <input
                  type='email'
                  name='user-email'
                  id='user-email'
                  defaultValue={email}
                />
              </FormInputWrapper>
              <FormInputWrapper>
                <Button type='submit' looks='primary'>
                  Update Profile
                </Button>
              </FormInputWrapper>
              <FormInputWrapper>
                <Button type='button' looks='secondary'>
                  Update Password
                </Button>
              </FormInputWrapper>
            </StyledForm>
          </div>
        </MeetupsHeaderText>
      </MeetupsHeader>
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
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;

  &.avatar {
    width: 10rem;
  }

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
