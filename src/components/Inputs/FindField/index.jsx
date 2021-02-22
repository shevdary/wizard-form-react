import React from 'react';
import PropTypes from 'prop-types';
// assets
import findIcon from 'assets/icon/find.svg';
// styled
import { FindFieldWrapper, Input } from './styled';

const FindField = ({ onChange, location }) =>
  location.includes('/user-list') && (
    <FindFieldWrapper>
      <img src={findIcon} alt="findUsers" />
      <Input
        type="text"
        onChange={onChange}
        name="username"
        placeholder="Find users"
      />
    </FindFieldWrapper>
  );

FindField.propTypes = {
  onChange: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export default FindField;
