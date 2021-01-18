import React from "react";
import {
  LazyComponentProps,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { ToursSectionGridContainer } from "./ToursSectionGridContainer";
import { TourWidget, TourWidgetTour } from "./TourWidget";

interface ToursGridProps extends LazyComponentProps {
  tours: TourWidgetTour[];
  buyTour: (tourID: string) => void;
}

const ToursGridComp: React.FC<ToursGridProps> = ({
  tours,
  buyTour,
  scrollPosition,
}) => {
  return (
    <ToursSectionGridContainer>
      {tours.map((tour) => (
        <TourWidget
          key={tour.id}
          tour={tour}
          buyTour={buyTour}
          scrollPosition={scrollPosition}
        />
      ))}
    </ToursSectionGridContainer>
  );
};

export const ToursGrid = trackWindowScroll(ToursGridComp);
