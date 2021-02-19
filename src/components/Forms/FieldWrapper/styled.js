import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { Field } from 'redux-form';

export const ReactSelect = {
  control: (styles, state) => ({
    ...styles,
    border: state.selectProps.border ? ' 1px solid red' : ' 1px solid #c1cfe0',
    borderRadius: 0,
    height: 'fit-content',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: () => ({
    display: 'inline-flex',
    flexDirection: 'row-reverse',
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
  border: ${(props) => (props.isError ? '1px solid red' : '1px solid #c1cfe0')};
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

  .react-datepicker__input-container input {
    padding-left: 10px;
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

export const InputField = styled(Field).attrs((props) => ({
  fonts: props.color,
}))`
  height: 40px;
  border: 1px solid #c1cfe0;
  font-size: 14px;
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin-top: 10px;
  margin-right: ${(props) => props.right};
  font-weight: ${(props) => (props.ckecked ? 'bold' : 'normal')};
  color: ${(props) => (props.ckecked ? '#242121' : '')};
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  input:checked ~ div {
    background: #4e86e4;
    border: 3px solid #c1cfe0;
  }
`;
export const Ckeckmark = styled.div`
  min-width: ${(props) => (props.checkbox ? '13px' : ' 17px')};
  height: ${(props) => (props.checkbox ? '13px' : ' 17px')};
  margin-right: 5px;
  border-radius: ${(props) => (props.checkbox ? '0' : '50%')};
  background: #ffffff;
  align-self: self-start;
  border: 1px solid #c1cfe0;
  box-sizing: border-box;
`;
