import React from "react";
import styled from "../../../style/styled";
import DownloadIcon from "mdi-react/DownloadIcon";
import { IconButton } from "../../IconButton";
import { theme } from "../../../style/AppGlobalStyle";

interface Props {
  playlistID: string;
}

export const TourWidgetOfflineStatusIndicator: React.FC<Props> = ({
  playlistID,
}) => {
  const handleDownloadButtonClick = (e: any) => {
    e.stopPropagation();

    window.alert("Not implemented");
  };

  let icon = (
    <IconButton
      disabled={false}
      iconColor={theme.palette.common.white}
      Icon={DownloadIcon}
      onClick={handleDownloadButtonClick}
      labelText="Download the tour to enjoy it even when you're not connected to the Internet"
    />
  );

  return <Container>{icon}</Container>;
};

// const ProgressText = styled.p`
//   margin-right: 8px;
//   color: ${(props) => props.theme.palette.common.white};
//   text-shadow: 0 0 4px #000;
//   font-weight: bold;
// `;

const Container = styled.div`
  position: absolute;
  right: 4px;
  bottom: 4px;
  z-index: 4;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
