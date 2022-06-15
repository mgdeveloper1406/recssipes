import ArrowIcon from '/icons/arrow.svg'
import Carousel from '../Carousel'
import ContactUsRecipes from '../../api/ContactUsRecipes'
import RecipeCard from '../RecipeCard'

import './styles.scss'

const CheckoutRecipes = () => {
  return (
    <section className='checkoutRecipes'>
      <h2 className='checkoutRecipes__title'>Check out these delicious recipes</h2>
      <Carousel 
        itemsArray={ContactUsRecipes} 
        ItemComponent={RecipeCard}
        arrowIcon={ArrowIcon}
        cardSize='small'
      />
    </section>
  );
};

export default CheckoutRecipes
