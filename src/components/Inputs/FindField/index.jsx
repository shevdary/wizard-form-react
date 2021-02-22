import React from 'react';
// assets
import findIcon from 'assets/icon/find.svg';
// styled
import { FindFieldWrapper, Input } from './styled';

const FindField = ({ onChange }) => (
  <>
    <FindFieldWrapper>
      <img src={findIcon} alt="findUsers" />
      <Input
        type="text"
        onChange={onChange}
        name="username"
        placeholder="Find users"
      />
    </FindFieldWrapper>
  </>
);

export default FindField;
