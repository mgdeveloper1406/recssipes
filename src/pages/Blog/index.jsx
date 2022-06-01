import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import './styles.scss'
import TitleAndSearch from '../../components/TitleAndSearch'

const Blog = () => {
  return (
    <div className='blog-page__container'>
      <TitleAndSearch/>
      {/* Post list component */}
      {/* Advertising  component */}
      {/* Tasty Recipes  component */}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog