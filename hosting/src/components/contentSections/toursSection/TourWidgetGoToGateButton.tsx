import React from "react";
import { Button } from "../../Button";
import { theme } from "../../../style/AppGlobalStyle";

interface Props {
  tourID: string;
}

export const TourWidgetGoToGateButton: React.FC<Props> = ({ tourID }) => {
  const handleGoToGateButtonClick = () => {
    window.alert("Not implemented");
  };

  return (
    <Button
      bgColor={theme.palette.highlight.main}
      color={theme.palette.highlight.contrastColor}
      width="100%"
      onClick={handleGoToGateButtonClick}
    >
      Start tour
    </Button>
  );
};
