import Footer from '@components/Footer'
import LearnMore from '@components/LearnMore'
import Newsletter from '@components/Newsletter'
import RecipeCategories from '@components/RecipeCategories'
import SimpleTastyRecipes from '@components/SimpleTastyRecipes'
import TryOutRecipes from '@components/TryOutRecipes'
import InstagramSection from '@components/InstagramSection'
import Hero from '@components/HeroSection'

import SimpleTastyRecipesData from '@api/SimpleTastyRecipes.js'
import TryOutRecipesData from '@api/TryOutRecipes.js'
import instagramData from '@api/intagramData.js';

import './styles.scss'

const Home = () => {
  return (
    <div className='homePage'>
      <Hero/>
      <RecipeCategories />
      <SimpleTastyRecipes recipes={SimpleTastyRecipesData} />
      <LearnMore />
      <InstagramSection posts={instagramData} />
      <TryOutRecipes recipes={TryOutRecipesData} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home