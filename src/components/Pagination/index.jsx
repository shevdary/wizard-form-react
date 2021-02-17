import React from 'react';
// components
import PageItem from './components/PageItem';
import NextPageItem from './components/NextPageItem';
import { range } from './components/helpers/range';
// styled
import { PageWrapper } from './styled';

const Pagination = ({
  totalItems,
  itemOnPage,
  pageRange,
  currentPage,
  handleChangePage,
}) => {
  const totalPages = Math.ceil(totalItems / itemOnPage);
  const pages = range(1, totalPages);

  const rangeOfPages = (page) => {
    if (page < 3) {
      return range(1, pageRange);
    }
    if (page >= 3 && page < totalPages - 1) {
      return range(currentPage - 2, currentPage + 2);
    }
    if (page === totalPages - 1) {
      return range(totalPages - pageRange + 1, totalPages + 1);
    }
    if (page === totalPages) {
      return range(totalPages - pageRange + 1, totalPages);
    }
  };

  if (totalItems <= itemOnPage) return null;
  return (
    <nav aria-label="Countries Pagination">
      <PageWrapper className="pagination">
        {currentPage !== 1 && (
          <NextPageItem
            type="previous"
            gotoPage={() => handleChangePage(currentPage - 1)}
            goToStart={() => handleChangePage(1)}
          />
        )}
        <PageItem
          pages={pages}
          rangePage={rangeOfPages}
          currentPage={currentPage}
          gotoPage={handleChangePage}
        />
        {currentPage !== totalPages && (
          <NextPageItem
            type="next"
            gotoPage={() => handleChangePage(currentPage + 1)}
            goToEnd={() => handleChangePage(totalPages)}
          />
        )}
      </PageWrapper>
    </nav>
  );
};
export default Pagination;
