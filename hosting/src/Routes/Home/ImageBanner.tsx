import React from 'react';
import { getBanner } from '../../branding/utils/getBanner';
import { ContentBetweenTwoBars } from '../../components/ContentBetweenTwoBars';
import { COLORS } from '../../style/AppGlobalStyle';
import { SCREEN_WIDTH_BREAK_SMALL } from '../../style/SIZES';
import styled from '../../style/styled';

export const ImageBanner = () => {
  const { title, subtitle, coverImageURL, height, maxHeight } = getBanner();

  return (
    <Container
      coverImageURL={coverImageURL}
      height={height}
      maxHeight={maxHeight}
    >
      <TitleContainer>
        <div>
          <Title color="#fff">{title}</Title>

          {subtitle && (
            <ContentBetweenTwoBars barColor="#fff">
              <SubtitleContainer>
                <Subtitle>{subtitle}</Subtitle>
              </SubtitleContainer>
            </ContentBetweenTwoBars>
          )}
        </div>
      </TitleContainer>
    </Container>
  );
};

const Container = styled.div<{
  coverImageURL: string;
  height: string;
  maxHeight: string;
}>`
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  background-image: url(${({ coverImageURL }) => coverImageURL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
  user-select: none;
  font-size: 18px;
  text-shadow: 0 0 4px #000;
  color: ${COLORS.lightTextColor};

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    font-size: 16px;
  }
`;

const SubtitleContainer = styled.div`
  padding: 0 20px;
  margin: 0;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto Black', 'Roboto Condensed', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, sans-serif;
  color: ${COLORS.lightTextColor};
  font-size: 48px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  user-select: none;
  text-align: center;
  text-shadow: 0 0 4px #000;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    font-size: 20px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
