
import AdvertisingCard from '../../components/AdvertisingCard'
import ArticlesList from '../../components/ArticlesList';
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import TitleAndSearch from '../../components/TitleAndSearch'

import AdvertisingData from '../../api/AdvertisingData'

import './styles.scss'

const Blog = () => {
  return (
    <div className='blog-page__container'>
      <TitleAndSearch/>
      <ArticlesList />
      <AdvertisingCard data={AdvertisingData} />
      {/* Tasty Recipes  component */}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog