import React, { PropsWithChildren } from 'react';
import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';
import { ICON_BUTTON_SIZE } from '../style/SIZES';

type IconButtonProps = PropsWithChildren<{
  isActive?: boolean;
  iconSize?: number;
  iconColor?: string;
  labelText?: string;
  tooltipText?: string;
  accessbilityLabel?: string;
  circular?: boolean;
  disabled?: boolean;
  Icon: any;
  onClick: (e?: any) => void;
  'data-testid'?: string;
}>;

export type IconToggleButtonProps = {
  isActive: boolean;
  onClick: () => any;
  labelText?: string;
  iconColor?: string;
  disabled?: boolean;
  circular?: boolean;
};

export const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  labelText,
  children,
  onClick,
  'data-testid': dataTestID,
  ...restProps
}) => {
  const color = restProps.iconColor || COLORS.primaryBackgroundColor;

  return (
    <ButtonContainerWithLabel onClick={onClick} title={labelText}>
      <ButtonStyled data-testid={dataTestID} {...restProps}>
        {Icon && <Icon size={restProps.iconSize} color={color} />}
      </ButtonStyled>

      {/* {labelText && !isMobile && <Label color={color}>{labelText}</Label>} */}
    </ButtonContainerWithLabel>
  );
};

IconButton.defaultProps = {
  iconSize: ICON_BUTTON_SIZE,
  iconColor: '#fff',
};

const ButtonContainerWithLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
`;

export const ButtonStyled = styled.div<
  Partial<{
    size: number;
    disabled: boolean;
    iconColor?: string;
    circular?: boolean;
    isActive?: boolean;
  }>
>`
  width: ${(props) => props.size && `${props.size}px`};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  border-radius: ${(props) => (props.circular ? '50%' : 'auto')};
  background: ${({ circular, isActive, iconColor }) => {
    if (!circular) {
      return 'none';
    }

    return isActive ? '#000' : iconColor;
  }};

  > svg {
    fill: ${({ isActive, circular, iconColor }) => {
      if (circular) {
        return isActive ? iconColor : '#000';
      }

      return isActive ? '#000' : iconColor;
    }};
  }
`;
