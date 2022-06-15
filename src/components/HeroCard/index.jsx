//Imports da versão detalhada:
/* import Timer from '/icons/timer.svg';
import Fork from '/icons/forkKnive.svg';
import Badge from '/imgs/Badge.png';
import Chicken from '/imgs/baked-chicken.png';
import Category from '/imgs/category.png';
import AutorInfo from '/imgs/autor-info.png';
*/

/* versão detalhada dos dados:
const itenscard = [
  {
    category: {Category},
    title: 'Spicy delicious chicken wings',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio esse quae at quia vel voluptas possimus deserunt, dolorum minima! Laudantium sed expedita maiores est similique voluptas adipisci officia obcaecati!',
    timerimage: {Timer},
    time:'30 minutes',
    forkimage:{Fork},
    namefood: 'Chicken',
    author: {AutorInfo},
    selo: {Badge},
    image: {Chicken}
  },

  {
    category: {Category},
    title: 'Spicy delicious chicken wings',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio esse quae at quia vel voluptas possimus deserunt, dolorum minima! Laudantium sed expedita maiores est similique voluptas adipisci officia obcaecati!',
    timerimage: {Timer},
    time:'30 minutes',
    forkimage:{Fork},
    namefood: 'Chicken',
    author: {AutorInfo},
    selo: {Badge},
    image: {Chicken}
  },

  {
    category: {Category},
    title: 'Spicy delicious chicken wings',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio esse quae at quia vel voluptas possimus deserunt, dolorum minima! Laudantium sed expedita maiores est similique voluptas adipisci officia obcaecati!',
    timerimage: {Timer},
    time:'30 minutes',
    forkimage:{Fork},
    namefood: 'Chicken',
    author: {AutorInfo},
    selo: {Badge},
    image: {Chicken}
  }
]
*/
import './styles.scss'



function HeroCard({image}) {
	
	return (
    <li className="heroCard">
			<img src={image} className="heroCard__image"/>
		</li>
	)
   
}


export default HeroCard;