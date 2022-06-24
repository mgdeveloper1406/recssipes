import React, { useContext } from 'react'

import useForm from '../../../hooks/useForm'

import { ToastContext } from '../../../contexts/ToastContext'

import { validateContact } from '../../../utils/validateContact'

import toastStatus from '@organisms/Toast'

import Input from '@molecules/DefaultInput'
import Select from '@molecules/DefaultSelect'
import Textarea from '@molecules/DefaultTextarea'
import Chef from '/imgs/chef.png'
import './styles.scss'

const Form = () => {
  const { openToast } = useContext(ToastContext)

  const submit = () => {
    openToast({
      text: `Thank you, ${contactInfo.userName}! We've received your 
        message and will get back to you within 24 hours.`,
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
              labelText='Name'
              id='username'
              showLabel
              type='text'
              placeholder='Enter your name...'
              name='userName'
              value={contactInfo.userName}
              handleOnChange={handleChange}
              inputError={contactInfoErrors.userNameError}
            />
            {
              contactInfoErrors.userNameError
              && <span className='contact-us__form-validation'>{contactInfoErrors.userNameError}</span>
            }
          </div>
          <div className='contact-us__input-container'>
            <Input
              labelText='Email address'
              id='email'
              showLabel
              type='text'
              placeholder='Your email address...'
              name='userEmail'
              value={contactInfo.userEmail}
              handleOnChange={handleChange}
              inputError={contactInfoErrors.userEmailError}
            />
            {
              contactInfoErrors.userEmailError
              && <span className='contact-us__form-validation'>{contactInfoErrors.userEmailError}</span>
            }
          </div>
          <div className='contact-us__select-container'>
            <Select
              labelText='Enquiry Type'
              id='enquiry'
              showLabel
              name='enquiryType'
              value={contactInfo.enquiryType}
              handleOnChange={handleChange}
              selectOptions={['Advertising', 'New Recipes', 'New Article', 'Partnership']}
            />
          </div>
          <div className='contact-us__input-container'>
            <Input
              labelText='Subject'
              id='subject'
              showLabel
              type='text'
              placeholder='Enter subject...'
              name='subject'
              value={contactInfo.subject}
              handleOnChange={handleChange}
              inputError={contactInfoErrors.subjectError}
            />
            {
              contactInfoErrors.subjectError
              && <span className='contact-us__form-validation'>{contactInfoErrors.subjectError}</span>
            }
          </div>
          <div className='grid-col-span-2 contact-us__textarea-container'>
            <Textarea
              labelText='Messages'
              id='messages'
              showLabel
              name='message'
              value={contactInfo.message}
              placeholder='Enter your messages...'
              handleOnChange={handleChange}
              textareaError={contactInfoErrors.messageError}
            />
            {
              contactInfoErrors.messageError
              && <span className='contact-us__form-validation'>{contactInfoErrors.messageError}</span>
            }
          </div>
          <button className='contact-us__form__button' type='submit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Form