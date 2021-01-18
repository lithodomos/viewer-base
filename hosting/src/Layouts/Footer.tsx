import React from "react";
import styled from "../style/styled";
import { COLORS } from "../style/AppGlobalStyle";
import {
  SCREEN_WIDTH_MAX,
  SCREEN_WIDTH_BREAK_SMALL,
  SCREEN_WIDTH_BREAK_MEDIUM,
  SCREEN_WIDTH_BREAK_EXTRA_SMALL,
} from "../style/SIZES";
import { ContactUsLink } from "../components/links/ContactUsLink";
import NavLinkWithCapture from "../components/NavLinkWithCapture";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <FooterCols>
          <FooterSection>
            <FooterTitle>Business</FooterTitle>

            <FooterNav>
              <FooterNavLinks>
                <li>
                  <Label>
                    <NavLinkWithCapture buttonName="AboutUs" to="">
                      About us
                    </NavLinkWithCapture>
                  </Label>
                </li>
              </FooterNavLinks>
            </FooterNav>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Policy and terms</FooterTitle>

            <FooterNav>
              <FooterNavLinks>
                <li>
                  <Label>
                    <NavLinkWithCapture buttonName="PrivacyPolicy" to="">
                      Privacy policy
                    </NavLinkWithCapture>
                  </Label>
                </li>

                <li>
                  <Label>
                    <NavLinkWithCapture buttonName="TermsConditions" to="">
                      General terms
                    </NavLinkWithCapture>
                  </Label>
                </li>
              </FooterNavLinks>
            </FooterNav>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Get in touch</FooterTitle>
            <FooterNav>
              <FooterNavLinks>
                <FooterNavLinks>
                  <ContactUsLink color={COLORS.primaryFontColor} />
                </FooterNavLinks>
              </FooterNavLinks>
            </FooterNav>
          </FooterSection>

          {/* <FooterSection>
            <FooterTitle>Sign up for our newsletter</FooterTitle>
            <Subscribe />
          </FooterSection> */}
        </FooterCols>

        <CopyrightContainer>
          <p>©2020 XXXXX Pty Ltd</p>
        </CopyrightContainer>
      </Wrapper>
    </Container>
  );
};

const CopyrightContainer = styled.div``;

const FooterTitle = styled.h4`
  margin-bottom: 24px;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    margin-bottom: 12px;
  }
`;

const FooterNav = styled.nav`
  padding-bottom: 32px;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    padding-bottom: 20px;
  }
`;

const FooterNavLinks = styled.ul`
  list-style: outside none none;
  padding: 0px;
  margin: 0px;

  li {
    padding: 3px 0;
  }
`;

const FooterSection = styled.div`
  flex: 0 0 25%;
  max-width: 25%;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_MEDIUM}px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_EXTRA_SMALL}px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${SCREEN_WIDTH_MAX}px;
  margin: 0 auto;
  padding: 30px 10px;
`;

const FooterCols = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: ${COLORS.primaryFontColor};
`;

const Container = styled.footer`
  margin-top: 20px;
  background: ${COLORS.offwhite};
  width: 100%;
`;

const Label = styled.p`
  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    padding: 12px 0;
  }
`;
