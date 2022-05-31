import { useMemo, useState } from 'react';
import { articles } from '../../api/articles';
import Pagination from '../Pagination';
import ArticleItem from './ArticleItem';

const articlesPerPage = 6

const ArticlesList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * articlesPerPage;
    const lastPageIndex = firstPageIndex + articlesPerPage;
    return articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <ul className='articleList'>
        {currentTableData.map(article => {
          return (
            <ArticleItem
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
        articlesPerPage={articlesPerPage}
        setCurrentPage={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ArticlesList;