import React from 'react';
import Select from 'react-select';
import { COLORS } from '../../style/AppGlobalStyle';
import { defaultStyle } from './styles/defaultStyle';

interface Props {
  value: any;
  onChange: (value: any) => void;
  styles?: any;
  isDisabled?: boolean;
  closeMenuOnSelect?: boolean;
}

export const InterestsSelect: React.FC<Props> = (props) => {
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
      className="react-select-container"
      classNamePrefix="react-select"
      isMulti
      options={getOptions()}
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

const options = [
  {
    value: 'Jerusalem',
    label: 'Jerusalem',
  },
  {
    value: 'London',
    label: 'London',
  },
  {
    value: 'Athens',
    label: 'Athens',
  },
  {
    value: 'Rome',
    label: 'Rome',
  },
  {
    value: 'Madrid',
    label: 'Madrid',
  },
  {
    value: 'Israel',
    label: 'Israel',
  },
  {
    value: 'Greece',
    label: 'Greece',
  },
  {
    value: 'Italy',
    label: 'Italy',
  },
  {
    value: 'Spain',
    label: 'Spain',
  },
  {
    value: 'Portugal',
    label: 'Portugal',
  },
  {
    value: 'Christianity',
    label: 'Christianity',
  },
  {
    value: 'Judaism',
    label: 'Judaism',
  },
  {
    value: 'Islam',
    label: 'Islam',
  },
];

function getOptions() {
  return options;
}
