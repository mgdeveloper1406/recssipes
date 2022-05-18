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
    <div>
      <label htmlFor={id} className='label_select'>{labelText}</label>
      <select
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