import Recipes from '../../components/RecipesCarousel/RecipesCarousel';
import Newsletter from '../../components/Newsletter/Newsletter';
import ContactUsRecipes from '../../components/ContactUsRecipes';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form'
import './contact.scss'
import { useContext } from 'react';
import { ToastContext } from '../../contexts/ToastContext';
import Toast from '../../components/Toast/Toast';

const Contact = () => {
  const { isOpen, closeToast, toastProps } = useContext(ToastContext)

  return (
    <div className='contact-page__container'>
      <Form />
      <Newsletter />
      <Recipes items={ContactUsRecipes} />
      <Footer />
      {isOpen && <Toast handleClose={closeToast} {...toastProps} />}
    </div>
  );
};

export default Contact;