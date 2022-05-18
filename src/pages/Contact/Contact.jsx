import Recipes from '../../components/RecipesCarousel/RecipesCarousel';
import Newsletter from '../../components/Newsletter/Newsletter';
import ContactUsRecipes from '../../components/ContactUsRecipes';
import Footer from '../../components/Footer/Footer';
import './contact.css'

const Contact = () => {
  return (
    <div className={`contact-page__container`}>
      <Newsletter />
      <Recipes items={ContactUsRecipes} />
      <Footer />
    </div>
  );
};

export default Contact;