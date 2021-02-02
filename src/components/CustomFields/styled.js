export const customStylesReactSelect = {
  menu: (provided) => ({
    ...provided,
    height: '180px',
    color: ' #657C9A',
    overflow: 'scrollY',
  }),
  menuList: (provided) => ({
    ...provided,
    height: '180px',
    color: '#657C9A',

    '::-webkit-scrollbar': {
      width: '5px',
      padding: '3px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#C1CFE0',
      borderRadius: '29px',
      padding: '3px',
    },
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    background: isDisabled
      ? 'white'
      : isFocused
      ? '#E7F0FF'
      : isSelected
      ? '#E7F0FF'
      : 'white',
    color: isFocused ? '#657C9A' : '#657C9A',
  }),
  control: (styles) => ({ ...styles, borderRadius: 0 }),
};
