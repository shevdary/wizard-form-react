import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const ReactSelect = {
  control: (styles) => ({
    ...styles,
    borderRadius: 0,
    height: 'fit-content',
    border: '0',
    '.error': {
      border: '1px solid red',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: () => ({
    'div:first-child': {
      position: 'absolute',
      left: '100%',
    },
  }),
  menu: (provided) => ({
    ...provided,
    height: '180px',
    color: ' #657C9A',
    overflow: 'scrollY',
    borderRadius: '0',
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
  multiValue: (provided) => ({
    ...provided,
    borderRadius: '0',
    background: '#E7F0FF',
    fontcolor: '#9BB0CB',
    'div:nth-child(2n):hover': {
      borderRadius: '0',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: 'fit-content',
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
};

export const DatePickerStyled = styled(DatePicker)`
  height: 40px;
  width: 195px;
  border: ${(props) => (props.error ? '1px solid red' : '1px solid #c1cfe0')};
  font-size: 14px;
`;

export const DatePickerWrapper = styled.div`
  color: #475666;
  position: relative;
  width: 75%;
  .react-datepicker {
    border-radius: 0;
    border: 1px solid #c1cfe0;
  }
  .react-datepicker__triangle,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow {
    display: none;
  }
  .react-datepicker__month-container {
    width: 200px;
    .react-datepicker__header {
      background: white;
    }
    .react-datepicker__week {
      width: 100%;
    }
  }
  .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown {
    width: 120px;
    height: 140px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: #c1cfe0;
      border-radius: 29px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #6b7c91;
    }
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;

    width: 21px;
    height: 23px;
  }
  .react-datepicker__header {
    .react-datepicker__year-option:hover,
    .react-datepicker__month-option:hover,
    .react-datepicker__month-year-option:hover {
      background-color: #fafcff;
    }
    .react-datepicker__month-read-view--selected-month,
    .react-datepicker__year-read-view {
      visibility: visible !important;
    }
    .react-datepicker__year-dropdown,
    .react-datepicker__month-dropdown {
      border-radius: 0;
      background: white;
    }
  }

  .react-datepicker__day--outside-month {
    background: white !important;
  }
  .react-datepicker__day {
    background: #fafcff;
    margin: 0 !important;
    padding: 0.166rem;
  }
  .react-datepicker__current-month {
    display: none;
  }
  .react-datepicker__month-read-view--selected-month,
  .react-datepicker__year-read-view--selected-year {
    font-weight: 700;
  }
  .react-datepicker__day--selected {
    color: black;
    border-radius: 0;
    background: #9bb0cb;
  }

  .react-datepicker__current-month {
  }
`;

export const InlineBlock = styled.div`
  margin-right: 20px;
`;

export const CalendarImg = styled.img`
  position: absolute;
  top: 15px;
  z-index: 1;
  right: 35px;
`;

export const Textarea = styled.textarea`
  width: 300px;
  max-width: 300px;
  min-height: 100px;
  resize: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  border: ${(props) => (props.error ? '1px solid red' : '1px solid #c1cfe0')};
`;

export const HeaderButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  align-self: center;
`;
