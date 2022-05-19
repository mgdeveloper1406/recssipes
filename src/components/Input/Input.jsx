import './Input.css'

const Input = ({ 
  labelText, 
  id, 
  type, 
  placeholder, 
  name, 
  value, 
  handleOnChange, 
  required = false
}) => {

  return (
    <div className='input__container'>
      <label htmlFor={id} className='input__label'>{labelText}</label>
      <input className='input'
        id={id} 
        type={type}
        placeholder={placeholder} 
        name={name} 
        value={value} 
        onChange={handleOnChange} 
        required={required}
      />
    </div>
  )
}
 
export default Input