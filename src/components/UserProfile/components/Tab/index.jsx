import React from 'react';
import PropsTypes from 'prop-types';
import edit from 'assets/icon/editData.svg';
import { Column, EditButton } from 'components/UserProfile/styled';

const ColTypeInfo = ({ label, onClick }) => (
  <Column>
    {label}
    <EditButton onClick={onClick}>
      <img src={edit} alt="edit" />
    </EditButton>
  </Column>
);

ColTypeInfo.propTypes = {
  label: PropsTypes.string.isRequired,
  onClick: PropsTypes.func,
};

export default ColTypeInfo;
