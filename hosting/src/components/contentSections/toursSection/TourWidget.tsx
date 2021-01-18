import React from "react";
import styled from "../../../style/styled";
import { ScrollPosition } from "react-lazy-load-image-component";
import { SCREEN_WIDTH_BREAK_SMALL } from "../../../style/SIZES";
import { Grid } from "../../../Layouts/Grid";
import {
  ContentSectionWidgetContainer,
  ContentSectionWidgetImageAspectRatioBox,
  ContentSectionWidgetImageAspectRatioBoxContent,
  ContentSectionWidgetImageAspectRatioBoxContentWrapper,
  ContentSectionWidgetTitle,
} from "../styledComponents";
import { TourWidgetOfflineStatusIndicator } from "./TourWidgetOfflineStatusIndicator";
import { isMobile } from "react-device-detect";
import { TourWidgetDefaultCheckInButton } from "./TourWidgetDefaultCheckInButton";
import { TourWidgetItineraryButton } from "./TourWidgetItineraryButton";
import { TourWidgetGoToGateButton } from "./TourWidgetGoToGateButton";
import { TourWidgetBookNowButton } from "./TourWidgetBookNowButton";
import { getExpiryInfo } from "./getExpiryInfo";
import { TourWidgetPrice } from "./TourWidgetPrice";
import { COLORS } from "../../../style/AppGlobalStyle";
import { TourWidgetPastThumbnail } from "./TourWidgetPastThumbnail";
import { TourWidgetPresentThumbnail } from "./TourWidgetPresentThumbnail";

export type TourWidgetTour = {
  id: string;
  internalReference: string;
  published?: boolean;
  trial?: boolean;
  nameI18n: {
    en_US: string | null;
  };
  pastThumbnail: {
    id: string;
    uri: string;
  } | null;
  presentThumbnail: {
    id: string;
    uri: string;
  } | null;
  purchaseInfo: {
    price: number | null;
    currencyCode: string;
  } | null;
  purchased: boolean;
};

interface TourWidgetProps {
  buyTour: (tourID: string) => void;
  expiresAt?: string | null;
  isGift?: boolean;
  tour: TourWidgetTour;
  LeftButton?: React.ReactChild;
  RightButton?: React.ReactChild;
  scrollPosition?: ScrollPosition;
}

export const TourWidget: React.FC<TourWidgetProps> = ({
  buyTour,
  expiresAt,
  tour,
  LeftButton,
  RightButton,
  isGift,
  scrollPosition,
}) => {
  const playlistsMapInCart: { [key: string]: number } = {};
  const { expiresIn, expiresSoon } = getExpiryInfo(expiresAt);

  const handleImageThumbnailClick = () => {
    window.alert("Not implemented");
  };

  const isInCart = Boolean(playlistsMapInCart[tour.id]);

  const nonInteractiveImageURI = tour.presentThumbnail?.uri;
  const interactiveImageURI = tour.pastThumbnail?.uri;

  let leftButton: React.ReactNode = null;

  if (LeftButton) {
    leftButton = LeftButton;
  } else if (tour.purchased) {
    leftButton = <TourWidgetGoToGateButton tourID={tour.id} />;
  } else if (!tour.purchased && !isInCart) {
    leftButton = (
      <TourWidgetBookNowButton
        tourID={tour.id}
        // TODO: optimise
        buy={() => buyTour(tour.id)}
      />
    );
  } else {
    leftButton = <TourWidgetDefaultCheckInButton tourID={tour.id} />;
  }

  const rightButton = RightButton || (
    <TourWidgetItineraryButton
      tourID={tour.id}
      internalReference={tour.internalReference}
    />
  );

  const purchasable = !tour?.trial && (!tour.purchased || isGift);
  const downloadable = (tour.purchased || tour.trial) && !isGift;

  return (
    <ContentSectionWidgetContainer interactive>
      <ContentSectionWidgetImageAspectRatioBox
        onClick={handleImageThumbnailClick}
      >
        <ContentSectionWidgetImageAspectRatioBoxContentWrapper>
          <ContentSectionWidgetImageAspectRatioBoxContent>
            <ContentSectionWidgetTitle>
              {tour.nameI18n.en_US}
            </ContentSectionWidgetTitle>

            {/* Price indicator */}
            {purchasable && (
              <TourWidgetPrice purchaseInfo={tour.purchaseInfo} />
            )}

            {/* Only visible on desktop */}
            {!isMobile && nonInteractiveImageURI && (
              <TourWidgetPresentThumbnail
                scrollPosition={scrollPosition}
                imageURI={nonInteractiveImageURI}
              />
            )}

            {/* This image moves to left when hovered */}
            {interactiveImageURI && (
              <TourWidgetPastThumbnail
                scrollPosition={scrollPosition}
                imageURI={interactiveImageURI}
              />
            )}

            {/* Download button */}
            {downloadable && (
              <TourWidgetOfflineStatusIndicator playlistID={tour.id} />
            )}
          </ContentSectionWidgetImageAspectRatioBoxContent>
        </ContentSectionWidgetImageAspectRatioBoxContentWrapper>
      </ContentSectionWidgetImageAspectRatioBox>

      {/* Left and Right buttons */}
      <Grid gap={4} cols={2} colsMedium={2} marginTop={4}>
        {leftButton}

        {rightButton}
      </Grid>

      {expiresIn && (
        <TourWidgetExpiresAtContainer expiresSoon={expiresSoon}>
          <TourWidgetExpiresAtText
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
          >
            Expires in {expiresIn}
          </TourWidgetExpiresAtText>

          {expiresSoon && (
            <ExpiryMessageContainer>
              Once a purchased tour expires, you will have to purchase it again.
            </ExpiryMessageContainer>
          )}
        </TourWidgetExpiresAtContainer>
      )}
    </ContentSectionWidgetContainer>
  );
};

const TourWidgetExpiresAtContainer = styled.div<{ expiresSoon?: boolean }>`
  text-align: left;
  margin-top: 4px;
  color: ${({ expiresSoon }) => (expiresSoon ? COLORS.errorColor : "inherit")};
  font-weight: ${({ expiresSoon }) => (expiresSoon ? "bold" : "auto")};
  position: relative;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    margin-top: 0;
  }
`;

const ExpiryMessageContainer = styled.div`
  margin-top: 4px;
  position: absolute;
  background: #eee;
  max-width: 300px;
  padding: 8px;
  border-radius: 4px;
  z-index: 4;
  display: none;
  border: 1px solid #aaa;
  color: ${(props) => props.theme.palette.common.white};
  font-weight: normal;
  font-size: 12px;

  ${TourWidgetExpiresAtContainer}:hover & {
    display: inherit;
  }
`;

const TourWidgetExpiresAtText = styled.span`
  font-size: 16px;
`;
