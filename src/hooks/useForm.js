import { useState } from 'react';

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
    setContactInfoErrors(validation(contactInfo))
    callback()
  };

  return [
    contactInfo,
    contactInfoErrors,
    handleChange,
    handleSubmit
  ];
};

export default useForm;