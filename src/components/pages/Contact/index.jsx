import { useContext } from 'react'
import CheckoutRecipes from '@organisms/CheckoutRecipes'
import Newsletter from '@organisms/Newsletter'
import Footer from '@organisms/Footer'
import Form from '@organisms/Form'
import { ToastContext } from '../../../contexts/ToastContext'
import Toast from '@components/Toast'

import './styles.scss'

const Contact = () => {
  const { isOpen, closeToast, toastProps } = useContext(ToastContext)

  return (
    <div className='contactPage'>
      <Form />
      <Newsletter />
      <CheckoutRecipes />
      <Footer />
      {isOpen && <Toast handleClose={closeToast} {...toastProps} />}
    </div>
  );
};

export default Contact