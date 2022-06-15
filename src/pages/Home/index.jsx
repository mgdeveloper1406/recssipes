import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import RecipeCategories from '../../components/RecipeCategories/index.jsx'
import TryOutRecipes from '../../components/TryOutRecipes/index.jsx'
import TryOutRecipesData from '../../api/TryOutRecipes.js'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-page__container'>
      {/* Hero section */}
      <RecipeCategories />
      {/* Simple and Tasty Recipes section */}
      {/* Everyone can be a chef... section */}
      {/* Check out @foodieland on Instagram section */}
      <TryOutRecipes recipes={TryOutRecipesData}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home