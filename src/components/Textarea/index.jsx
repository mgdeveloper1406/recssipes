import './styles.scss'

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
    <div className='textarea__container'>
      <label htmlFor={id} className='textarea__label'>{labelText}</label>
      <textarea className={`textarea ${textAreaError}`}
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