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
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
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