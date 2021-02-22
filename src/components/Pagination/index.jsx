import React from 'react';
// components
import PageItem from './components/PageItem';
import SwitchPage from './components/NextPageItem';
import { range } from './components/helpers/range';
// styled
import { PageWrapper } from './styled';
// utils
import { rangeOfPages } from './components/helpers/rangeOfPage';

const Pagination = ({
  totalItems,
  itemPerPage,
  pageRange,
  currentPage,
  handleChangePage,
}) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const pages = range(1, totalPages);

  if (totalItems <= itemPerPage) return null;

  return (
    <nav aria-label="Countries Pagination">
      <PageWrapper className="pagination">
        {currentPage !== 1 && (
          <SwitchPage
            pageType="previous"
            order
            handleChangePage={() => handleChangePage(currentPage - 1)}
            handleExtremePage={() => handleChangePage(1)}
          />
        )}
        <PageItem
          pages={pages}
          rangePage={() => rangeOfPages(currentPage, pageRange, totalPages)}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
        />
        {currentPage !== totalPages && (
          <SwitchPage
            pageType="next"
            handleChangePage={() => handleChangePage(currentPage + 1)}
            handleExtremePage={() => handleChangePage(totalPages)}
          />
        )}
      </PageWrapper>
    </nav>
  );
};
export default Pagination;
