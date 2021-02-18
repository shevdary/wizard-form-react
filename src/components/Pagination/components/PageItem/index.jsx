import React from 'react';
import PropTypes from 'prop-types';
// styled
import { Page, PageList } from 'components/Pagination/styled';

const PageItem = ({ currentPage, handleChangePage, pages, rangePage }) =>
  pages.map(
    (page, index) =>
      rangePage(currentPage).includes(page) && (
        <PageList
          key={index}
          className={currentPage === page ? 'active' : null}
        >
          <Page
            href="#"
            aria-label="Previous"
            onClick={() => handleChangePage(page)}
          >
            {page}
          </Page>
        </PageList>
      )
  );

PageItem.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.array.isRequired,
  rangePage: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};
export default PageItem;
