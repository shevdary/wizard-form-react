/*eslint-disable*/
import React, { Fragment, useEffect, useState } from 'react';
import { PageWrapper } from './styled';
import PageItem from './components/PageItem';
import NextPageItem from './components/NextPageItem';
import { range } from './components/helpers/range';

const Pagination = ({
  totalRecords = null,
  itemOnPage,
  pagesRange = 3,
  currentPage,
  onPageChanged,
}) => {
  const [pageByRange, setPageByRange] = useState([]);
  const totalPages = Math.ceil(totalRecords / itemOnPage);

  const RangePage = () => {
    if (totalPages > 3) {
      if (pagesRange && currentPage > 1) {
        setPageByRange(range(currentPage - 1, currentPage + 1));
      }
    }
  };

  const gotoPage = (page) => {
    const pages = Math.max(0, Math.min(page, totalPages));
    onPageChanged({
      currentPage: pages,
      totalPages,
      itemOnPage,
      totalRecords,
    });
  };

  const fetchPageNumbers = () => {
    return range(1, totalPages);
  };

  useEffect(() => {
    range(1, totalPages);
    gotoPage(currentPage);
    RangePage();
  }, [range, totalPages, currentPage]);

  const pages = fetchPageNumbers();
  return (
    <Fragment>
      <nav aria-label="Countries Pagination">
        <PageWrapper className="pagination">
          {currentPage !== 1 && (
            <>
              <NextPageItem
                type="previous"
                gotoPage={() => gotoPage(currentPage - 1)}
                goToStart={() => gotoPage(1)}
              />
            </>
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
