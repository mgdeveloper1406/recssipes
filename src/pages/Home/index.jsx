import Footer from '../../components/Footer'
import LearnMore from '../../components/LearnMore'
import Newsletter from '../../components/Newsletter'
import RecipeCategories from '../../components/RecipeCategories/index.jsx'
import TryOutRecipes from '../../components/TryOutRecipes/index.jsx'
import TryOutRecipesData from '../../api/TryOutRecipes.js'
import Hero from '../../components/HeroSection'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-page__container'>
      <Hero/>
      <RecipeCategories />
      {/* Simple and Tasty Recipes section */}
      <LearnMore />
      {/* Check out @foodieland on Instagram section */}
      <TryOutRecipes recipes={TryOutRecipesData}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home