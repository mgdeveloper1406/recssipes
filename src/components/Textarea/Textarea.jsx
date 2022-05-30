import './Textarea.scss'

const Textarea = ({
  labelText,
  id,
  name,
  value,
  placeholder,
  handleOnChange,
  textAreaError,
  required = false
}) => {

  return (
    <div className='text-area__container'>
      <label htmlFor={id} className='text-area__label'>{labelText}</label>
      <textarea className={`text-area ${textAreaError}`}
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