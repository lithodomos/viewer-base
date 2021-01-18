import React from "react";
import styled from "../style/styled";
import { SCREEN_WIDTH_BREAK_SMALL } from "../style/SIZES";
import { UnstyledLink } from "../styledComponents/UnstyledLink";
import { ContentBetweenTwoBars } from "../components/ContentBetweenTwoBars";

interface Props {
  title: string;
  subtitle: string;
  paddingTop?: number;
  paddingBottom?: number;
}

export const TourTitle: React.FC<Props> = ({
  title,
  subtitle,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <TourTitleContainer paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <UnstyledLink href={""}>
        <Title>{title}</Title>
      </UnstyledLink>

      <ContentBetweenTwoBars barColor="#fff">
        <SubtitleContainer>
          <Subtitle>{subtitle}</Subtitle>
        </SubtitleContainer>
      </ContentBetweenTwoBars>
    </TourTitleContainer>
  );
};

const TourTitleContainer = styled.div<{
  paddingTop?: number;
  paddingBottom?: number;
}>`
  padding-top: ${({ paddingTop }) => paddingTop || 24}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 24}px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  text-transform: uppercase;
  user-select: none;
  font-size: 22px;
  text-shadow: 0 0 4px #000;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    font-size: 12px;
  }
`;

export const SubtitleContainer = styled.div`
  padding: 0 30px;
  margin: 0;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    padding: 0 10px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  user-select: none;
  text-align: center;
  text-shadow: 0 0 4px #000;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    font-size: 24px;
  }
`;
