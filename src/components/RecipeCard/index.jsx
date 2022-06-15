import { Link } from 'react-router-dom'
import LikeButton from '../LikeButton'
import TimerIcon from '/icons/timer.svg'
import ForkKnifeIcon from '/icons/forkKnife.svg'

import './styles.scss'

const RecipeCard = ({ image, title, tag1, tag2, cardSize }) => {

  return (
      <li className='recipeCard__container'>
        <Link to='/recipes' className='recipeCard__link'>
          <div className='recipeCard'>
            <img className='recipeCard__img' src={image} alt={title} />
            <LikeButton />
            <h3 className={`recipeCard__title recipeCard__title--${cardSize}`}>{title}</h3>
            <div className='recipeCard__tags'>
              <span className='recipeCard__tag1'>
                <img
                  src={TimerIcon}
                  alt='Duration'
                  className='recipeCard__tag1__icon'
                />
                {tag1}
              </span>
              <span className='recipeCard__tag2'>
                <img
                  src={ForkKnifeIcon}
                  alt='Type'
                  className='recipeCard__tag2__icon'
                />
                {tag2}
              </span>
            </div>
          </div>
        </Link>
      </li>
  );
};

export default RecipeCard