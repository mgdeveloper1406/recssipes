import Footer from '../../components/Footer'
import LearnMore from '../../components/LearnMore'
import Newsletter from '../../components/Newsletter'
import RecipeCategories from '../../components/RecipeCategories'
import SimpleTastyRecipes from '../../components/SimpleTastyRecipes'
import TryOutRecipes from '../../components/TryOutRecipes'

import SimpleTastyRecipesData from '../../api/SimpleTastyRecipes.js'
import TryOutRecipesData from '../../api/TryOutRecipes.js'
import Hero from '../../components/HeroSection'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-page__container'>
      <Hero/>
      <RecipeCategories />
      <SimpleTastyRecipes recipes={SimpleTastyRecipesData}/>
      <LearnMore />
      {/* Check out @foodieland on Instagram section */}
      <TryOutRecipes recipes={TryOutRecipesData}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home