import React from 'react';
import Select from 'react-select';
import { defaultStyle } from './styles/defaultStyle';

type Option = { value: string; label: string; data?: any };

interface Props {
  value: any;
  maxMenuHeight?: number;
  onChange: (value: any) => void;
  options: Array<
    | Option
    | {
        label: string;
        options: Array<Option>;
      }
  >;
  styles?: any;
  isDisabled?: boolean;
  placeholder?: string;
}

export const Dropdown: React.FC<Props> = (props) => {
  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      maxMenuHeight={140}
      {...props}
    />
  );
};

Dropdown.defaultProps = {
  styles: defaultStyle,
  isDisabled: false,
};
