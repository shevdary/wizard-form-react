import React from 'react';
// styled
import { FlexCol, FlexTable } from 'components/UsersTable/styled';

const TableHeader = () => (
  <FlexTable color="#4e86e4" height="50px" className="header">
    <FlexCol className="header with-avatar">
      <p>name</p>
    </FlexCol>
    <FlexCol className="header">company</FlexCol>
    <FlexCol className="header" minWidth="275px">
      contacts
    </FlexCol>
    <FlexCol className="header">last update</FlexCol>
  </FlexTable>
);

export default TableHeader;
