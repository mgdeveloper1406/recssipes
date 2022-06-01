import ArticlesList from '../../components/ArticlesList';
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import TitleAndSearch from '../../components/TitleAndSearch'

import './styles.scss'

const Blog = () => {
  return (
    <div className='blog-page__container'>
      <TitleAndSearch/>
      <ArticlesList />
      {/* Advertising  component */}
      {/* Tasty Recipes  component */}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog