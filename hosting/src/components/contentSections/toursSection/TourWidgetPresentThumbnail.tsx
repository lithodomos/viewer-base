import React from "react";
import { LazyLoadImage, ScrollPosition } from "react-lazy-load-image-component";

interface Props {
  scrollPosition?: ScrollPosition;
  imageURI: string;
}

export const TourWidgetPresentThumbnail: React.FC<Props> = ({
  scrollPosition,
  imageURI,
}) => {
  return (
    <LazyLoadImage
      src={imageURI}
      width="100%"
      alt=""
      delayTime={1000}
      scrollPosition={scrollPosition}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
      }}
    />
  );
};
