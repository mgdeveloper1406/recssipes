import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import './styles.scss'
import TitleAndSearch from '../../components/TitleAndSearch'
import TastyRecipes from '../../components/TastyRecipesSection'

const Blog = () => {
  return (
    <div className='blog-page__container'>
      <TitleAndSearch/>
      {/* Post list component */}
      {/* Advertising  component */}
      <TastyRecipes/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog