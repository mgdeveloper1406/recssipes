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
