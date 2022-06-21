import RecipeCard from '../../RecipeCard'

import './styles.scss'

const TryOutRecipes = ({ recipes }) => {
  const tryOutRecipes = recipes.map((recipe) => {
    return (
      <RecipeCard 
        key={recipe.id}
        {...recipe}
        cardSize='small'
      />
    )
  })
  return (
    <section className='tryOutRecipes__container'>
      <div className='tryOutRecipes__header'>
        <h2 className='tryOutRecipes__title'>Try this delicious recipe to make your day</h2>
        <p className='tryOutRecipes__text'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
      </div>
      <div className='tryOutRecipes'>
        {tryOutRecipes}
      </div>
    </section>
  )
}

export default TryOutRecipes