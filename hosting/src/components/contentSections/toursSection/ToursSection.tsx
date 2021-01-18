import React from "react";
import {
  ContentSectionContainer,
  ContentSectionTitleContainer,
  ContentSectionTitle,
} from "../styledComponents";
import { ToursGridWithAddToCartPopup } from "./ToursGridWithAddToCartPopup";

const DEFAULT_TOURS = [
  {
    id: "1",
    internalReference: "tour_1",
    trial: false,
    published: true,
    purchased: false,
    nameI18n: {
      en_US: "Barcelona",
    },
    purchaseInfo: {
      id: "1",
      price: 6.99,
      currencyCode: "USD",
    },
    pastThumbnail: {
      id: "1",
      uri: "/027add87878acaf1242c86e2be2e8d79.jpg",
      contentLength: 13031,
    },
    presentThumbnail: {
      id: "2",
      uri: "/6465930b0f83e1801151524f4e125c52.jpg",
      contentLength: 26547,
    },
  },
  {
    id: "2",
    internalReference: "tour_2",
    trial: false,
    published: true,
    purchased: false,
    nameI18n: {
      en_US: "Corinth",
    },
    purchaseInfo: {
      id: "2",
      price: 6.99,
      currencyCode: "USD",
    },
    pastThumbnail: {
      id: "3",
      uri: "/e720eb9369b2d8777e914ead18e28ae1.jpg",
      contentLength: 11245,
    },
    presentThumbnail: {
      id: "4",
      uri: "/4cab859d59b3014065f7b4f365bb0624.jpg",
      contentLength: 22789,
    },
  },
  {
    id: "3",
    internalReference: "tour_3",
    trial: false,
    published: true,
    purchased: false,
    nameI18n: {
      en_US: "Delphi",
    },
    purchaseInfo: {
      id: "3",
      price: 3.49,
      currencyCode: "USD",
    },
    pastThumbnail: {
      id: "5",
      uri: "/a4b514a52c06b63fc693b5f396662c10.jpg",
      contentLength: 19322,
    },
    presentThumbnail: {
      id: "6",
      uri: "/aa814117ea36412f41106125e118185b.jpg",
      contentLength: 20755,
    },
  },
  {
    id: "4",
    internalReference: "tour_4",
    trial: false,
    published: true,
    purchased: false,
    nameI18n: {
      en_US: "Epidauros",
    },
    purchaseInfo: {
      id: "4",
      price: 3.49,
      currencyCode: "USD",
    },
    pastThumbnail: {
      id: "7",
      uri: "/3dfd4751f50c395a556b2e3d11062ea5.jpg",
      contentLength: 10993,
    },
    presentThumbnail: {
      id: "8",
      uri: "/32b0b280a7d0b054edd93f6ea058f4c0.jpg",
      contentLength: 23031,
    },
  },
];

export const ToursSection: React.FC = () => {
  return (
    <ContentSectionContainer id="tours_section">
      <ContentSectionTitleContainer>
        <ContentSectionTitle>
          DESTINATIONS - ON SITE OR AT HOME
        </ContentSectionTitle>
      </ContentSectionTitleContainer>

      <ToursGridWithAddToCartPopup tours={DEFAULT_TOURS} />
    </ContentSectionContainer>
  );
};
