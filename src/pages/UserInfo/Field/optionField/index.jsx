import React, { Component } from 'react';
import { Row } from '../../styled';

const OptionField = ({ label, value }) => {
  return (
    <Row>
      <p>Skills</p>
      <p>
        {user.skills
          .map((item) => item)
          .map((item) => item.label)
          .join(', ')}
      </p>
    </Row>
  );
};

export default OptionField;
