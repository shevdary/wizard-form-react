/*eslint-disable*/
import React, { Fragment, useEffect, useState } from 'react';
import { PageWrapper } from './styled';
import PageItem from './components/PageItem';
import NextPageItem from './components/NextPageItem';
import { range } from './components/helpers/range';

const Pagination = ({
  totalItems,
  itemOnPage,
  pagesNeighborhood,
  onChangedPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageByRange, setPageByRange] = useState(range(1, pagesNeighborhood));
  const totalPages = Math.ceil(totalItems / itemOnPage);

  const RangePage = () => {
    if (currentPage === 1) {
      setPageByRange(range(currentPage, currentPage + pagesNeighborhood));
    }

    if (currentPage > 1 && currentPage < totalPages) {
      setPageByRange(
        range(currentPage - pagesNeighborhood, currentPage + pagesNeighborhood)
      );
    }
    if (currentPage === totalPages) {
      setPageByRange(range(currentPage - pagesNeighborhood, currentPage));
    } else {
    }
  };

  const setPage = (page) => {};

  const gotoPage = (page) => {
    const pages = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(page);
    onChangedPage({
      currentPage: pages,
      totalPages,
      itemOnPage,
      totalItems,
    });
  };

  useEffect(() => {
    range(1, totalPages);
    gotoPage(currentPage);
    RangePage();
  }, [range, totalPages, currentPage]);

  const pages = range(1, totalPages);
  return (
    <Fragment>
      <nav aria-label="Countries Pagination">
        <PageWrapper className="pagination">
          {currentPage !== 1 && (
            <NextPageItem
              type="previous"
              gotoPage={() => gotoPage(currentPage - 1)}
              goToStart={() => gotoPage(1)}
            />
          )}
          <PageItem
            pages={pages}
            pageRange={pageByRange}
            currentPage={currentPage}
            gotoPage={gotoPage}
          />
          {currentPage !== totalPages && (
            <NextPageItem
              type="next"
              gotoPage={() => gotoPage(currentPage + 1)}
              goToEnd={() => gotoPage(totalPages)}
            />
          )}
        </PageWrapper>
      </nav>
    </Fragment>
  );
};
export default Pagination;
