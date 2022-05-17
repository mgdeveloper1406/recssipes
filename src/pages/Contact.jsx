import Recipes from '../components/RecipesCarousel/RecipesCarousel';
import Newsletter from '../components/Newsletter/Newsletter';
import ContactUsRecipes from '../components/ContactUsRecipes';
import Footer from '../components/Footer/Footer';

const Contact = () => {
  return (
    <div className={`contact-page-container`}>
      <Newsletter />
      <Recipes items={ContactUsRecipes} />
      <Footer />
    </div>
  );
};

export default Contact;