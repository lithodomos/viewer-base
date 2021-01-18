import React from 'react';
import styled from '../style/styled';

interface Props {
  barWidth?: number;
  barColor?: string;
  children: any;
}

// TODO: write tests
export const ContentBetweenTwoBars: React.FC<Props> = ({
  barWidth,
  barColor,
  children,
}) => {
  const color = barColor || '#777';
  const width = (barWidth || 2) / 2;

  return (
    <Container>
      <Side>
        <Top barColor={color} barWidth={width} />
        <Bottom barColor={color} barWidth={width} />
      </Side>

      {children}

      <Side>
        <Top barColor={color} barWidth={width} />
        <Bottom barColor={color} barWidth={width} />
      </Side>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;

const Side = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div<{ barColor: string; barWidth: number }>`
  border-bottom: ${(props) => props.barWidth}px solid
    ${(props) => props.barColor};
  height: 50%;
`;

const Bottom = styled.div<{ barColor: string; barWidth: number }>`
  border-top: ${(props) => props.barWidth}px solid ${(props) => props.barColor};
  height: 50%;
`;
