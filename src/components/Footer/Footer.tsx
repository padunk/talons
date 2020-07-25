import React from "react";
import styled from "styled-components";
import { GrTwitter, GrInstagram, GrFacebook, GrGithub } from "react-icons/gr";
import {
  NAV_ROUTES,
  BREAKPOINTS,
  COLORS,
  FONT_SIZES,
} from "../../constants/constants";
import logo from "../../assets/icons/talons.svg";
import { PlainLink, UnstyledImg } from "../GlobalComponents/GlobalComponents";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInfo>
        <div>
          <div className='about-talons'>
            <LogoWrapper>
              <LogoLink to='/'>
                <Logo src={logo} alt='talons.dev logo' />
              </LogoLink>
            </LogoWrapper>
            <h2>All in one site to hire the best developer in the world.</h2>
          </div>
          <SocMedWrapper>
            <a
              href='https://github.com/AbrahamAnakAgung'
              target='_blank'
              rel='noreferrer'>
              <GrGithub size='2rem' />
            </a>
            <a
              href='https://twitter.com/anakagungcorp'
              target='_blank'
              rel='noreferrer'>
              <GrTwitter size='2rem' />
            </a>
            <a href='#' target='_blank' rel='noreferrer'>
              <GrInstagram size='2rem' />
            </a>
            <a href='#' target='_blank' rel='noreferrer'>
              <GrFacebook size='2rem' />
            </a>
          </SocMedWrapper>
        </div>
        <FooterLinks>
          <LinkWrapper>
            <p>
              <strong>Directories</strong>
            </p>
            {NAV_ROUTES.map((route, idx) => (
              <FooterLink key={idx} to={route.path}>
                {route.name}
              </FooterLink>
            ))}
          </LinkWrapper>
          <LinkWrapper>
            <p>
              <strong>Company</strong>
            </p>
            <FooterLink to='/about'>About</FooterLink>
            <FooterLink to='/careers'>Careers</FooterLink>
            <FooterLink to='/support'>Support</FooterLink>
            <FooterLink to='/media-kit'>Media Kit</FooterLink>
            <FooterLink to='/terms'>Terms of service</FooterLink>
            <FooterLink to='/privacy'>Privacy Policy</FooterLink>
          </LinkWrapper>
        </FooterLinks>
      </FooterInfo>
      <FooterCopyright>
        &copy; {year} Talons.dev. All rights reserved.
        <p>
          Made with 💛 love by{" "}
          <a href='https://github.com/AbrahamAnakAgung'>AAA</a>
        </p>
      </FooterCopyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${COLORS.grayLight};
  color: ${COLORS.grayTextDark};
  border-top: 5px solid ${COLORS.primaryLight};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Logo = styled(UnstyledImg)`
  width: 15rem;
  object-fit: contain;
`;

const LogoLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${BREAKPOINTS.lg} {
    width: 20rem;
  }
`;

const SocMedWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
  max-width: 30rem;
`;

const FooterLinks = styled.div`
  flex: 2 1;

  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
`;

const LinkWrapper = styled.div`
  font-size: ${FONT_SIZES.md};
`;

const FooterLink = styled(PlainLink)`
  display: block;
`;

const FooterCopyright = styled.div`
  font-size: ${FONT_SIZES.mdMin};
  text-align: center;
  padding-top: 1rem;
`;
