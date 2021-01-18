import React from "react";
import { Button } from "../../Button";

interface Props {
  tourID: string;
  buy: () => void;
}

export const TourWidgetBookNowButton: React.FC<Props> = ({ tourID, buy }) => {
  const handleBuyTourButtonClick = () => {
    window.alert("Not implemented");
  };

  return (
    <Button black width="100%" onClick={handleBuyTourButtonClick}>
      Add to cart
    </Button>
  );
};
