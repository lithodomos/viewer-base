import React from "react";
import { Button } from "../../Button";

interface Props {
  tourID: string;
}

export const TourWidgetDefaultCheckInButton: React.FC<Props> = ({ tourID }) => {
  const handleCheckInButtonClick = () => {
    window.alert("Not implemented");
  };

  return (
    <Button black width="100%" onClick={handleCheckInButtonClick}>
      View in cart
    </Button>
  );
};
