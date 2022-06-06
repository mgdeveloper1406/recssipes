import Recipes from '../../components/RecipesCarousel';
import Newsletter from '../../components/Newsletter';
import ContactUsRecipes from '../../api/ContactUsRecipes'
import Footer from '../../components/Footer';
import Form from '../../components/Form'
import './styles.scss'
import { useContext } from 'react';
import { ToastContext } from '../../contexts/ToastContext';
import Toast from '../../components/Toast';

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