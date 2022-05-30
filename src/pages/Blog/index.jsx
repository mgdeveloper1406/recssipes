import AdvertisingCard from '../../components/AdvertisingCard'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'

import AdvertisingData from '../../components/AdvertisingData'

import './styles.css'

const Blog = () => {
  return (
    <div className='blog-page__container'>
      {/* Blog & Article component */}
      {/* Post list component */}
      <AdvertisingCard data={AdvertisingData} />
      {/* Tasty Recipes  component */}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog