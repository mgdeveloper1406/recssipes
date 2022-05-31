
const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  articlesPerPage,
}) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    articlesPerPage
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <ul className='pagination'>
        <li className='pagination__leftArrow' onClick={onPrevious}></li>
        {paginationRange.map((page, index) => (
          <li key={index} className='pagination__pageNumber' onClick={() => onPageChange(page)}>{page}</li>
        ))}
        <li className='pagination__rightArrow' onClick={onNext}></li>
      </ul>
    </>
  )
};

export default Pagination;