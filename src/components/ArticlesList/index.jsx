import { useEffect, useMemo, useState } from 'react';
import { articles } from '../../api/articles';
import Pagination from '../Pagination';
import ArticleItem from './ArticleItem';
import usePageWidth from '../../hooks/usePageWidth'

import './index.css'


const ArticlesList = () => {
  const width = usePageWidth()
  const [currentPage, setCurrentPage] = useState(1);
  const [pageWidth, setPageWidth] = useState(width)
  const [pageSize, setPageSize] = useState(6)

  console.log('currentPage', currentPage)
  console.log('pageWidth', pageWidth)
  console.log('pageSize', pageSize)
  console.log('width', width)

  useEffect(() => {
    setPageWidth(width)
    pageWidth <= 420 ? setPageSize(3) : setPageSize(6)
  }, [pageWidth])

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  return (
    <>
      <ul className='articleList'>
        {currentTableData.map(article => {
          return (
            <ArticleItem
              key={article.id}
              id={article.id}
              image={article.image}
              title={article.title}
              description={article.description}
              userImage={article.userImage}
              userName={article.userName}
              plublishedAt={article.publishedAt}
            />
          )
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalCount={articles.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ArticlesList;