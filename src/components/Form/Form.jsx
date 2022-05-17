import React, { useState } from 'react'
import Input from '../Input/Input'

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
    <div>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor='enquiry'>Enquiry Type</label>
        <select 
          id='enquiry'
          value={enquiryType}
          onChange={handleEnquiryTypeChange}
        >
          <option value='Advertising'>Advertising</option>
          <option value='New Recipes'>New Recipes</option>
          <option value='New Article'>New Article</option>
          <option value='Partnership'>Partnership</option>
        </select>
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
        <label htmlFor='messages'>Messages</label>
        <textarea 
          id='messages'
          name='messages'
          value={message}
          onChange={handleMessageChange}
          required
        >
        </textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form