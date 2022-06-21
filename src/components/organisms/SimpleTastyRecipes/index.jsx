import AdvertisingCard from '../AdvertisingCard'
import AdvertisingData from '@api/AdvertisingData'
import RecipeCard from '../../RecipeCard'

import './styles.scss'

const SimpleTastyRecipes = ({ recipes }) => {
  const simpleTastyRecipes = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        {...recipe}
        cardSize='large'
        background='lightBlue'
      />
    )
  })
  return (
    <section className='simpleTastyRecipes__container'>
      <div className='simpleTastyRecipes__header'>
        <h2 className='simpleTastyRecipes__title'>Simple and tasty recipes</h2>
        <p className='simpleTastyRecipes__text'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
      </div>
      <div className='simpleTastyRecipes'>
        {simpleTastyRecipes}
        <aside className='simpleTastyRecipes__advertising'>
          <AdvertisingCard data={AdvertisingData} noMargin />
        </aside>
      </div>
    </section>
  )
}

export default SimpleTastyRecipes