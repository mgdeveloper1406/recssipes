import { useState } from 'react';

const useForm = (callback, validation) => {
  const [contactInfo, setContactInfo] = useState({
    userName: ``,
    userEmail: ``,
    enquiryType: ``,
    subject: ``,
    message: ``
  });

  const [contactInfoErrors, setContactInfoErros] = useState({
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
    setContactInfoErros(validation(contactInfo))
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