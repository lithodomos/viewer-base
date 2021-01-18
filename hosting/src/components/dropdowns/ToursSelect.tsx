import React from 'react';
import Select from 'react-select';
import { COLORS } from '../../style/AppGlobalStyle';
import { defaultStyle } from './styles/defaultStyle';

interface Props {
  value: any;
  onChange: (value: any) => void;
  isDisabled?: boolean;
  closeMenuOnSelect?: boolean;
  options: Array<{ value: string; label: string }>;
}

export const ToursSelect: React.FC<Props> = (props) => {
  const customStyles = {
    valueContainer: (base: any, { isDisabled }: any) => ({
      ...base,
      color: isDisabled ? '#999' : COLORS.primaryFontColor,
      textOverflow: 'ellipsis',
      maxWidth: '85%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'initial',
    }),
  };

  const MultiValueContainer = ({ selectProps, data }: any) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex(
      (selected: any) => selected.label === label
    );

    const isLastSelected = index === allSelected.length - 1;
    const labelSuffix = isLastSelected ? ` (${allSelected.length})` : ', ';

    const val = `${label}${labelSuffix}`;

    return val;
  };

  return (
    <Select
      isMulti
      {...props}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      // without it, it creates a cursor below the selections options
      isSearchable={false}
      // @ts-ignore
      components={{ MultiValueContainer }}
      styles={{ ...defaultStyle, ...customStyles }}
      maxMenuHeight={140}
    />
  );
};
