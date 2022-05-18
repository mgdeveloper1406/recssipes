import { useState } from 'react';

const useForm = (callback) => {
  const [contactInfo, setContactInfo] = useState({
    userName: ``,
    userEmail: ``,
    enquiryType: ``,
    subject: ``,
    message: ``
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    callback()
  };

  return [
    contactInfo,
    handleChange,
    handleSubmit
  ];
};

export default useForm;