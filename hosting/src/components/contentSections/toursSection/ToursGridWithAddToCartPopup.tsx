import React from "react";
import { ToursGrid } from "./ToursGrid";
import { TourWidgetTour } from "./TourWidget";

interface ToursGridWithModal {
  tours: Array<TourWidgetTour>;
}

// This component name is misleading
export const ToursGridWithAddToCartPopup: React.FC<ToursGridWithModal> = ({
  tours,
}) => {
  const buyTour = (tourID: string) => {
    window.alert("Not implemented");
  };

  return <ToursGrid tours={tours} buyTour={buyTour} />;
};
