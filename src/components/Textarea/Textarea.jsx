import './Textarea.css'

const Textarea = ({ 
  classes = null,
  labelText, 
  id,
  name, 
  value,
  placeholder,
  handleOnChange, 
  required = false
}) => {
  
  return (
    <div className={`text-area__container ${classes}`}>
      <label htmlFor={id} className='text-area__label'>{labelText}</label>
      <textarea  className='text-area'
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        required={required}
      >
      </textarea>
    </div>
  )
}

export default Textarea