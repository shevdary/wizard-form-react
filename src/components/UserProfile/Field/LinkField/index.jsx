import React from 'react';
import { Row } from '../../styled';

const LinkField = ({ label, value, textLink }) => (
  <Row>
    <p>{`${label} : `}</p>
    <a href={value}>{textLink}</a>
  </Row>
);
export default LinkField;
