import React from "react";
import styled from "../style/styled";
import { COLORS } from "../style/AppGlobalStyle";
import { AppHeader } from "../components/appHeader/AppHeader";
import { Footer } from "./Footer";
import { SCREEN_WIDTH_BREAK_SMALL, SCREEN_WIDTH_MAX } from "../style/SIZES";
import { getDecorationImageURL } from "../utils/getDecorationImageURL";

interface Props {
  children: any;
  businessHeader?: boolean;
  headerTextColor?: string;
  limitContentWidth?: boolean;
}

export const PageLayout: React.FC<Props> = ({
  children,
  businessHeader = false,
  headerTextColor,
  limitContentWidth = true,
}) => {
  return (
    <Container>
      <AppHeader color={headerTextColor} />

      <Wrapper>
        <Content
          businessHeader={businessHeader}
          limitContentWidth={limitContentWidth}
        >
          {children}
        </Content>
      </Wrapper>

      <Footer />
    </Container>
  );
};

const Wrapper = styled.div`
  background-image: url(${getDecorationImageURL()});
  background-size: auto 300px;
  background-position: center bottom;
  background-repeat: repeat-x;
  width: 100%;
  flex-grow: 1;
`;

const Container = styled.div`
  background: ${COLORS.primaryBackgroundColor};
  color: ${COLORS.primaryFontColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  position: relative;
`;

const Content = styled.div<{
  businessHeader: boolean;
  limitContentWidth: boolean;
}>`
  width: 100%;
  max-width: ${({ limitContentWidth }) =>
    !limitContentWidth ? "100%" : `${SCREEN_WIDTH_MAX}px`};
  margin: 0 auto;

  padding-top: 80px;
  padding-left: ${({ businessHeader }) => (businessHeader ? "0" : "10px")};
  padding-right: ${({ businessHeader }) => (businessHeader ? "0" : "10px")};

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    padding-top: 50px;
  }
`;
