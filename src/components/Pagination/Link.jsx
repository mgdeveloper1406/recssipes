import React from 'react'

const Dots = ({ className }) => <span className={className}>...</span>;

const Link = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? Dots : 'a';

  const handleClick = !onClick ? null : (e) => {
    e.preventDefault()
    onClick(page)
  }
  return (
    <>
      <Component href={pageLink} onClick={handleClick} className='paginationLink'>
        {page}
      </Component>
    </>
  );
};

export default Link;