import React from 'react';
import PropsTypes from 'prop-types';
import edit from 'assets/icon/editData.svg';
import { Col, EditButton } from '../../styled';

const ColTypeInfo = ({ label, onClick }) => (
  <Col>
    {label}
    <EditButton onClick={onClick}>
      <img src={edit} alt="edit" />
    </EditButton>
  </Col>
);

ColTypeInfo.propTypes = {
  label: PropsTypes.string.isRequired,
  onClick: PropsTypes.func,
};

export default ColTypeInfo;
