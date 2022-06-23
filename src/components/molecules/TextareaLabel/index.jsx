import './styles.scss'

const TextareaLabel = ({
  labelText,
  id,
  showLabel,
  name,
  value,
  placeholder,
  handleOnChange,
  textareaError = false,
  required = false
}) => {

  return (
    <div className='textareaLabel'>
      <label htmlFor={id} className={`textareaLabel__label${showLabel ? '' : '--visuallyHidden'}`}>{labelText}</label>
      <textarea className={`textareaLabel__textarea ${textareaError ? 'textareaLabel__textarea--error' : ''}`}
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

export default TextareaLabel