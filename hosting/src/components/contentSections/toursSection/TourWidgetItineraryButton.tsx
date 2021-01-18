import React from "react";
import { Button } from "../../Button";

interface Props {
  tourID: string;
  internalReference: string;
}

export const TourWidgetItineraryButton: React.FC<Props> = ({
  tourID,
  internalReference,
}) => {
  const handleItineraryButtonClick = () => {
    window.alert("Not implemented");
  };

  return (
    <Button secondary width="100%" onClick={handleItineraryButtonClick}>
      Itinerary
    </Button>
  );
};
