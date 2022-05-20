import React, { useContext } from 'react';

import useForm from '../../hooks/useForm'

import { ToastContext } from '../../contexts/ToastContext';

import { validateContact } from '../../utils/validateContact'

import toastStatus from '../Toast/Toast';

import Input from '../Input/Input';
import Select from '../Select/Select';
import Textarea from '../Textarea/Textarea';
import Chef from '/imgs/chef.png';
import './Form.css';

const Form = () => {
  const { openToast } = useContext(ToastContext)

  const submit = () => {
    openToast({
      text: `success`,
      status: toastStatus.success
    })
  }

  const {
    contactInfo,
    contactInfoErrors,
    handleChange,
    handleSubmit
  } = useForm(submit, validateContact)

  return (
    <section className='contact-us'>
      <h1 className='contact-us__title'>Contact us</h1>
      <div className='contact-us__content'>
        <img className='contact-us__img' src={Chef} alt='Chef giving thumbs up'></img>
        <form className='contact-us__form' onSubmit={handleSubmit} name='contactForm'>
          <div className='contact-us__input-container'>
            <Input
              labelText='name'
              id='username'
              type='text'
              placeholder='Enter your name...'
              name='userName'
              value={contactInfo.userName}
              handleOnChange={handleChange}
            />
            {
              contactInfoErrors.userNameError
              && <span>{contactInfoErrors.userNameError}</span>
            }
          </div>
          <div className='contact-us__input-container'>
            <Input
              labelText='email address'
              id='email'
              type='text'
              placeholder='Your email address...'
              name='userEmail'
              value={contactInfo.userEmail}
              handleOnChange={handleChange}
            />
            {
              contactInfoErrors.userEmailError
              && <span>{contactInfoErrors.userEmailError}</span>
            }
          </div>
          <div className='contact-us__select-container'>
            <Select
              labelText='Enquiry Type'
              id='enquiry'
              name='enquiryType'
              value={contactInfo.enquiryType}
              handleOnChange={handleChange}
              selectOptions={['Advertising', 'New Recipes', 'New Article', 'Partnership']}
            />
          </div>
          <div className='contact-us__input-container'>
            <Input
              labelText='subject'
              id='subject'
              type='text'
              placeholder='Enter subject...'
              name='subject'
              value={contactInfo.subject}
              handleOnChange={handleChange}
            />
            {
              contactInfoErrors.subjectError
              && <span>{contactInfoErrors.subjectError}</span>
            }
          </div>
          <div className='grid-col-span-2 contact-us__textarea-container'>
            <Textarea
              labelText='Messages'
              id='messages'
              name='message'
              value={contactInfo.message}
              placeholder='Enter your messages...'
              handleOnChange={handleChange}
            />
            {
              contactInfoErrors.messageError
              && <span>{contactInfoErrors.messageError}</span>
            }
          </div>
          <button className='contact-us__form__button' type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;