import { useEffect, useState } from 'react';

const useForm = (callback, validation) => {
  const [contactInfo, setContactInfo] = useState({
    userName: ``,
    userEmail: ``,
    enquiryType: ``,
    subject: ``,
    message: ``
  });

  const [contactInfoErrors, setContactInfoErrors] = useState({
    userNameError: ``,
    userEmailError: ``,
    enquiryTypeError: ``,
    subjectError: ``,
    messageError: ``
  });

  const [isSubmiting, setIsSubmiting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`handleSubmit`)
    setContactInfoErrors(validation(contactInfo))
    setIsSubmiting(true)
  };

  useEffect(() => {
    if (Object.keys(contactInfoErrors).length === 0 && isSubmiting) (
      callback()
    )
  }, [contactInfoErrors])

  return {
    contactInfo,
    contactInfoErrors,
    handleChange,
    handleSubmit
  };
};

export default useForm;