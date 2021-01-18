import React from "react";
import { LazyLoadImage, ScrollPosition } from "react-lazy-load-image-component";

interface Props {
  scrollPosition?: ScrollPosition;
  imageURI: string;
}

export const TourWidgetPastThumbnail: React.FC<Props> = ({
  scrollPosition,
  imageURI,
}) => {
  return (
    <LazyLoadImage
      className="current"
      scrollPosition={scrollPosition}
      src={imageURI}
      width="100%"
      alt=""
      style={{
        transition: "transform 0.3s ease-in-out",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,
      }}
    />
  );
};
