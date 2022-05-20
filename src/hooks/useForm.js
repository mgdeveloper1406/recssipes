import { useEffect, useState, useContext } from 'react';

import { ToastContext } from '../contexts/ToastContext';

import { toastStatus } from '../components/Toast/Toast';

const useForm = (callback, validation) => {
  const { openToast } = useContext(ToastContext)

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
    setContactInfoErrors(validation(contactInfo))
    setIsSubmiting(true)
  };

  useEffect(() => {
    if (Object.keys(contactInfoErrors).length === 0 && isSubmiting) {
      callback()
    }
    // if (contactInfoErrors.userNameError && isSubmiting) {
    //   openToast({
    //     text: contactInfoErrors.userNameError,
    //     status: toastStatus.error
    //   })
    // }
    //  if (contactInfoErrors.userEmailError && isSubmiting) {
    //   openToast({
    //     text: contactInfoErrors.userEmailError,
    //     status: toastStatus.error
    //   })
    // }
  }, [contactInfoErrors])

  return {
    contactInfo,
    contactInfoErrors,
    handleChange,
    handleSubmit
  };
};

export default useForm;