import './Select.css'

const Select = ({ 
  labelText, 
  id,  
  value, 
  handleOnChange, 
  selectOptions
}) => {

  const options = selectOptions.map(option => <option key={option} value={option}>{option}</option>)
  
  return (
    <div className='select__container'>
      <label htmlFor={id} className='select__label'>{labelText}</label>
      <select 
        className='select'
        id={id} 
        value={value} 
        onChange={handleOnChange} 
      >
        {options}
      </select>
    </div>
  )
}
 
export default Select