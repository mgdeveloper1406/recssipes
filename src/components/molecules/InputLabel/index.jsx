import './styles.scss'

const InputLabel = ({ 
  labelText, 
  id,
  showLabel,
  type, 
  placeholder, 
  name, 
  value, 
  handleOnChange,
  inputError = false,
  required = false
}) => {

  return (
    <div className='inputLabel'>
      <label htmlFor={id} className={`inputLabel__label${showLabel ? '' : '--visuallyHidden'}`}>{labelText}</label>
      <input className={`inputLabel__input ${inputError ? 'inputLabel__input--error' : ''}`}
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
 
export default InputLabel