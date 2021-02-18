import React from 'react';
import PropTypes from 'prop-types';
// assets
import img from 'assets/icon/previous.svg';
import startPage from 'assets/icon/startPage.svg';
// styled
import { Img, Page, PageList } from 'components/Pagination/styled';

const SwitchPage = ({ handleChangePage, handleExtremePage, pageType }) => (
  <>
    <PageList pageType={pageType}>
      <Page onClick={handleChangePage} type="button">
        <Img src={img} alt={pageType} />
      </Page>
    </PageList>
    <PageList pageType={pageType} className="firstSwitch" type="button">
      <Page onClick={handleExtremePage}>
        <Img src={startPage} alt={pageType} />
      </Page>
    </PageList>
  </>
);

SwitchPage.propTypes = {
  handleChangePage: PropTypes.func.isRequired,
  handleExtremePage: PropTypes.func.isRequired,
  pageType: PropTypes.oneOf(['previous', 'next']),
};

export default SwitchPage;
