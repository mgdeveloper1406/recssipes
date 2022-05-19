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

  const submitForm = () => {
    console.log(`teste`)
  }

  const [
    contactInfo,
    contactInfoErrors,
    handleChange,
    handleSubmit
  ] = useForm(submitForm, validateContact)



  console.log(contactInfoErrors, contactInfo)
  return (
    <section className='contact-us'>
      <h1 className='contact-us__title'>Contact us</h1>
      <div className='contact-us__content'>
        <img className='contact-us__img' src={Chef} alt='Chef giving thumbs up'></img>
        <form className='contact-us__form' onSubmit={handleSubmit} name='contactForm'>
          <div className='contact-us__input-container'>
            <Input
              labelText='name'
              id='username' type='text'
              placeholder='Enter your name...'
              name='userName'
              onChange={handleChange}
              required
            />
            {
              contactInfo.userName
              && <span>{contactInfoErrors.username}</span>
            }
          </div>
          <div className='contact-us__input-container'>
            <Input
              labelText='email address'
              id='email'
              type='email'
              placeholder='Your email address...'
              name='userEmail'
              onChange={handleChange}
              required
            />
          </div>
          <div className='contact-us__input-container'>
            <Select
              labelText='Enquiry Type'
              name='enquiryType'
              id='enquiry'
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </div>
          <div className='contact-us__input-container'>
            <Textarea
              classes='grid-col-span-2'
              labelText='Messages'
              id='messages'
              name='message'
              placeholder='Enter your messages...'
              onChange={handleChange}
              required
            />
          </div>
          <button className='contact-us__form__button' type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;