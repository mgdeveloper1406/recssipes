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
    <div className='input_container'>
      <label htmlFor={id} className='label-input'>{labelText}</label>
      <input className='input_form'
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