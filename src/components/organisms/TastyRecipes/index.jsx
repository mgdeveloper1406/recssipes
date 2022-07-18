import { Link } from 'react-router-dom'
import image1 from '/imgs/image-tr1.png'
import image2 from '/imgs/image-tr2.png'
import image3 from '/imgs/image-tr3.png'

import './styles.scss'

const tastyrecipeslist = [
  {
    id: '151',
    src: image1,
    title: 'Chicken Meatballs with Cream Cheese',
    autor: 'By Andreas Paula'
  },
  {
    id: '152',
    src: image2,
    title: 'Traditional Bolognaise Ragu',
    autor: 'By Andreas Paula'
  },
  {
    id: '153',
    src: image3,
    title: 'Pork and Chive Chinese Dumplings',
    autor: 'By Andreas Paula'
  }
];

const TastyRecipes = () => {

  return (
    <section className='TastyRecipes'>
      <h1 className='TastyRecipes__titleHeader'>
        Tasty Recipes
      </h1>
      <ul className='TastyRecipes__list'>
        {tastyrecipeslist.map((tastyrecipe) => {
          return (
            <li key={tastyrecipe.id} className='TastyRecipes__listItem'>
              <Link
                to={`/recipe/${tastyrecipe.id}`} 
                className='TastyRecipes__link'
                state={tastyrecipe.id}
              >
              <img src={tastyrecipe.src} alt={tastyrecipe.title} className="TastyRecipes__image" />
              <div className='TastyRecipes__authorContainer'>
                <h3 className='TastyRecipes__authorTitle'>
                  {tastyrecipe.title}
                </h3>
                <p className='TastyRecipes__author'>
                  {tastyrecipe.autor}
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
