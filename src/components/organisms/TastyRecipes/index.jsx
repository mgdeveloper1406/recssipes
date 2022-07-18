import { Link } from 'react-router-dom'
import './styles.scss'

const TastyRecipes = ({ data }) => {

  return (
    <section className='TastyRecipes'>
      <h1 className='TastyRecipes__titleHeader'>
        Tasty Recipes
      </h1>
      <ul className='TastyRecipes__list'>
        {data.map((tastyrecipe) => {
          return (
            <li key={tastyrecipe.id} className='TastyRecipes__listItem'>
              <Link
                to={`/recipe/${tastyrecipe.id}`} 
                className='TastyRecipes__link'
                state={tastyrecipe.id}
              >
              <img src={tastyrecipe.image} alt={tastyrecipe.title} className="TastyRecipes__image" />
              <div className='TastyRecipes__authorContainer'>
                <h3 className='TastyRecipes__authorTitle'>
                  {tastyrecipe.title}
                </h3>
                <p className='TastyRecipes__author'>
                  By {tastyrecipe.author}
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
