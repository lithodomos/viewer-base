import React from "react";
import styled from "../../../style/styled";
import { getPriceFormatted } from "../../../utils/getPriceFormatted";
import { getTotalAmount } from "../../../utils/getTotalAmount";
import { ContentSectionWidgetPrice } from "../styledComponents";

interface Props {
  purchaseInfo: {
    price: number | null;
    currencyCode: any;
  } | null;
}

export const TourWidgetPrice: React.FC<Props> = ({ purchaseInfo }) => {
  const undiscountedPrice = getPriceFormatted({
    price: getTotalAmount({ items: [{ purchaseInfo }] }),
  });

  return (
    <Container>
      <ContentSectionWidgetPrice>{undiscountedPrice}</ContentSectionWidgetPrice>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 4;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
