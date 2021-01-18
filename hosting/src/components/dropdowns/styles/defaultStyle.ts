import { COLORS } from '../../../style/AppGlobalStyle';

export const defaultStyle = {
  option: (provided: any, state: any) => ({
    ...provided,
    // color: state.isSelected ? "blue" : "",
    color: state.isSelected ? COLORS.offwhite : COLORS.primaryFontColor,
    fontSize: 16,
    textAlign: 'left',
    backgroundColor: state.isSelected ? COLORS.activeColor : '',
    // cursor: "pointer"
  }),
  container: (base: any) => ({
    ...base,
    width: '100%',
  }),
  control: (base: any) => ({
    ...base,
    // height: 40,
    minHeight: 32,
    fontSize: 16,
    border: `1px solid ${COLORS.offwhiteDarker}`,
    borderRadius: 0,
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    outline: 'none',
    background: COLORS.offwhite,
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: COLORS.primaryFontColor,
    // display: "none"
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    display: 'none',
  }),
  valueContainer: (base: any, { isDisabled }: any) => ({
    ...base,
    color: isDisabled ? '#999' : COLORS.primaryFontColor,
    // padding: 10
    // padding: 0,
    // paddingLeft: 2
  }),
};
