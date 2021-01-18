import React from "react";
import styled from "../../style/styled";
import { COLORS } from "../../style/AppGlobalStyle";
import { AppHeader } from "../../components/appHeader/AppHeader";
import { Footer } from "../../Layouts/Footer";
import { ToursSection } from "../../components/contentSections/toursSection/ToursSection";
import { BannerWrapper } from "./BannerWrapper";
import { Wrapper } from "../../Layouts/Wrapper";
import { getDecorationImageURL } from "../../utils/getDecorationImageURL";

export const HomeScreen: React.FC = () => {
  return (
    <PageContainer>
      <AppHeader gradient />

      <BannerWrapper />

      <MainContainer>
        <Wrapper>
          <ToursSection />
        </Wrapper>
      </MainContainer>

      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background: ${COLORS.primaryBackgroundColor};
  color: ${COLORS.primaryFontColor};
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContainer = styled.main`
  background-image: url(${getDecorationImageURL()});
  background-size: auto 300px;
  background-position: center bottom;
  background-repeat: repeat-x;
  width: 100%;
  flex-grow: 1;
`;
