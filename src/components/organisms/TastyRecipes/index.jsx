import { Link } from 'react-router-dom'
import './styles.scss'

const TastyRecipes = ({ data }) => {
  return (
    <section className='TastyRecipes'>
      <h1 className='TastyRecipes__titleHeader'>
        Tasty Recipes
      </h1>
      <ul className='TastyRecipes__list'>
        {data.map((tastyRecipe) => {
          return (
            <li key={tastyRecipe.id} className='TastyRecipes__listItem'>
              <Link
                to={`/recipe/${tastyRecipe.id}`} 
                className='TastyRecipes__link'
                state={tastyRecipe}
              >
              <img src={tastyRecipe.image} alt={tastyRecipe.title} className="TastyRecipes__image" />
              <div className='TastyRecipes__authorContainer'>
                <h3 className='TastyRecipes__authorTitle'>
                  {tastyRecipe.title}
                </h3>
                <p className='TastyRecipes__author'>
                  By {tastyRecipe.author}
                </p>
              </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default TastyRecipes;
