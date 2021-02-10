import React from 'react';

// styled
import { ErrorTitle, ErrorWrapper } from './styled';

const NotFound = ({ title }) => (
  <ErrorWrapper>
    <ErrorTitle>{`404 ${title || 'Page not found'}`}</ErrorTitle>
  </ErrorWrapper>
);

export default NotFound;
