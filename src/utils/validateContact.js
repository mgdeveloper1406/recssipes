export default validateContact = (contactInfo) => {
  const {
    userName,
    userEmail,
    enquiryType,
    subject,
    message } = contactInfo

  let errors = {};

  if (!userName) errors.userNameError = `Please, let us know who you are.`
  if (!userEmail) errors.userEmailError = `How are we going to contact you?.`
  if (!enquiryType) errors.enquiryTypeError = `Please, state the nature of your contact.`
  if (!subject) errors.subjectError = `What do you want to talk about?`
  if (!message) errors.messageError = `Isn't there anything you want to say?`

  return errors;
};