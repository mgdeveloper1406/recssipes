import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import RecipesData from '@api/RecipesData.json'
import TastyRecipes from '@organisms/TastyRecipes'
import RecipeHeader from '@organisms/RecipeHeader'
import AdvertisingCard from '@molecules/Cards/Advertising'
import AdvertisingData from '@api/AdvertisingData'
import Newsletter from '@organisms/Newsletter'
import CheckoutRecipes from '@organisms/CheckoutRecipes'
import NotFound from '@molecules/NotFound'
import RecipeNutritionInfo from '@molecules/RecipeNutritionInfo'

import './styles.scss'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const [notFound, setNotFound] = useState(false)

  const { state } = useLocation()
  const { recipeId } = useParams()

  useEffect(() => {
    if (!state) {
      const recipe = RecipesData.filter((recipe) => {
        return (recipe.id === recipeId)
      })
  
      if (recipe.length > 0) {
        setRecipe(recipe[0])
      } else {
        setNotFound(true)
      }
    } else {
      setRecipe(state)
    }
  }, [recipeId])
  

  return (
    <div className="recipePage">
      {notFound && <NotFound text='This recipe does not exist' />}
      {Object.keys(recipe).length > 0 &&
      <> 
        <RecipeHeader data={recipe} />
        <RecipeNutritionInfo data={recipe.nutritionInfo}/>
      </>
      }
      <TastyRecipes data={RecipesData.slice(20, 23)}/>
      <AdvertisingCard data={AdvertisingData} />
      <Newsletter />
      <CheckoutRecipes />
    </div>
  )
}

export default Recipe
