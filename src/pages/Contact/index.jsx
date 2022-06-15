import CheckoutRecipes from '../../components/CheckoutRecipes'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import { useContext } from 'react'
import { ToastContext } from '../../contexts/ToastContext'
import Toast from '../../components/Toast'

import './styles.scss'

const Contact = () => {
  const { isOpen, closeToast, toastProps } = useContext(ToastContext)

  return (
    <div className='contact-page__container'>
      <Form />
      <Newsletter />
      <CheckoutRecipes />
      <Footer />
      {isOpen && <Toast handleClose={closeToast} {...toastProps} />}
    </div>
  );
};

export default Contact