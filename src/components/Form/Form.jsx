import React, { useState } from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'
import Textarea from '../Textarea/Textarea'

const Form = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [enquiryType, setEnquiryType] = useState('Advertising')
  const [submitted, setSubmitted] = useState(false)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleEnquiryTypeChange = (e) => {
    setEnquiryType(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    //do something with the form states

    setUsername('')
    setEmail('')
    setSubject('')
    setMessage('')
    setEnquiryType('Advertising')
  }

  return (
    <div className='form__container'>
      <form className='form' onSubmit={handleSubmit}>
        <Input 
          labelText='name' 
          id='username' type='text' 
          placeholder='Enter your name...' 
          name='username' 
          value={username} 
          handleOnChange={handleUsernameChange} 
          required 
        />
        <Input 
          labelText='email address' 
          id='email' 
          type='email' 
          placeholder='Your email address...' 
          name='email' 
          value={email} 
          handleOnChange={handleEmailChange} 
          required 
        />
        <Select 
          labelText='Enquiry Type' 
          id='enquiry' 
          value={enquiryType} 
          handleOnChange={handleEnquiryTypeChange} 
          selectOptions={['Advertising', 'New Recipes', 'New Article', 'Partnership']}
        />
        <Input 
          labelText='subject' 
          id='subject' 
          type='text' 
          placeholder='Enter subject...' 
          name='subject' 
          value={subject} 
          handleOnChange={handleSubjectChange} 
          required 
        />
        <Textarea 
          labelText='Messages' 
          id='messages' 
          name='messages' 
          value={message} 
          handleOnChange={handleMessageChange} 
          required
        >
        </Textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form