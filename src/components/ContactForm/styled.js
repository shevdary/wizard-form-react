import styled from 'styled-components';
import Select from 'react-select';
import InputMask from 'react-input-mask';

export const ButtonForPhone = styled.button`
  display: ${(props) => props.count < 2 && 'none'};
  background: transparent;
  border: none;
  color: #657c9a;
  font-size: 14px;
  ${(props) =>
    props.type === 'remove' && {
      position: 'absolute',
      top: '30px',
      left: '105%',
    }}
`;

export const Selects = styled(Select)`
  background: red;
  #style-1::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  #style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

export const InputMaskStyled = styled(InputMask)`
  height: 40px;
  width: 100%;
  border: 1px solid #c1cfe0;
  font-size: 14px;
`;

export const FieldWrapper = styled.div`
  position: relative;
`;
