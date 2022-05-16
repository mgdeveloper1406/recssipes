import { Link } from 'react-router-dom'
import TimerIcon from '../../../public/icons/timer.svg'
import ForkKnifeIcon from '../../../public/icons/forkKnife.svg'
import './RecipeCard.css'
import LikeButton from '../LikeButton/LikeButton'

const RecipeCard = ({ id, image, title, tag1, tag2 }) => {

  return (
      <li className='recipe-card__container'>
        <Link to='/' className='recipe-card__link'>
          <div className='recipe-card'>
            <img className='recipe-card__img' src={image} alt={title} />
            <LikeButton />
            <h3 className='recipe-card__title'>{title}</h3>
            <div className='recipe-card__tags'>
              <span className='recipe-card__tag1'>
                <img 
                  src={TimerIcon} 
                  alt='Timer' 
                  className='recipe-card__tag1--icon'
                /> 
                {tag1}
              </span>
              <span className='recipe-card__tag2'>
                <img 
                  src={ForkKnifeIcon} 
                  alt='Fork and knife' 
                  className='recipe-card__tag2--icon'
                /> 
                {tag2}
              </span>
            </div>
          </div>
        </Link>
      </li>
   );
}
 
export default RecipeCard;