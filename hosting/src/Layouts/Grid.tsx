import React from "react";
import styled from "../style/styled";
import {
  SCREEN_WIDTH_BREAK_MEDIUM,
  SCREEN_WIDTH_BREAK_SMALL,
} from "../style/SIZES";

interface Props {
  children: any;

  gap?: number;
  gapMedium?: number;
  gapSmall?: number;

  cols?: number;
  colsMedium?: number;
  colsSmall?: number;

  marginBottom?: number;
  marginBottomMedium?: number;
  marginBottomSmall?: number;

  marginTop?: number;
  marginTopMedium?: number;
  marginTopSmall?: number;
}

// TODO: write tests
export const Grid: React.FC<Props> = (props) => {
  const gap = props.gap !== undefined ? props.gap : 40;
  const gapMedium = props.gapMedium !== undefined ? props.gapMedium : gap;
  const gapSmall = props.gapSmall !== undefined ? props.gapSmall : gapMedium;

  const cols = props.cols || 3;
  const colsMedium = props.colsMedium || cols;
  const colsSmall = props.colsSmall || colsMedium;

  const marginBottom =
    props.marginBottom !== undefined ? props.marginBottom : 0;
  const marginBottomMedium =
    props.marginBottomMedium !== undefined
      ? props.marginBottomMedium
      : marginBottom;
  const marginBottomSmall =
    props.marginBottomSmall !== undefined
      ? props.marginBottomSmall
      : marginBottomMedium;

  const marginTop = props.marginTop !== undefined ? props.marginTop : 0;
  const marginTopMedium =
    props.marginTopSmall !== undefined ? props.marginTopSmall : marginTop;
  const marginTopSmall =
    props.marginTopSmall !== undefined ? props.marginTopSmall : marginTopMedium;

  return (
    <Wrapper
      gap={gap}
      gapSmall={gapSmall}
      gapMedium={gapMedium}
      cols={cols}
      colsSmall={colsSmall}
      colsMedium={colsMedium}
      marginBottom={marginBottom}
      marginBottomMedium={marginBottomMedium}
      marginBottomSmall={marginBottomSmall}
      marginTop={marginTop}
      marginTopMedium={marginTopMedium}
      marginTopSmall={marginTopSmall}
    >
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  gap: number;
  gapSmall: number;
  gapMedium: number;

  cols: number;
  colsMedium: number;
  colsSmall: number;

  marginTop: number;
  marginTopMedium: number;
  marginTopSmall: number;

  marginBottom: number;
  marginBottomMedium: number;
  marginBottomSmall: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-gap: ${(props) => props.gap}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_MEDIUM}px) {
    grid-template-columns: repeat(${(props) => props.colsMedium}, 1fr);
    grid-gap: ${(props) => props.gapMedium}px;
    margin-top: ${(props) => props.marginTopMedium}px;
    margin-bottom: ${(props) => props.marginBottomMedium}px;
  }

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    grid-template-columns: repeat(${(props) => props.colsSmall}, 1fr);
    grid-gap: ${(props) => props.gapSmall}px;
    margin-top: ${(props) => props.marginTopSmall}px;
    margin-bottom: ${(props) => props.marginBottomSmall}px;
  }
`;
