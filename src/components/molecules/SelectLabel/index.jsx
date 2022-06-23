import './styles.scss'

const SelectLabel = ({
  labelText,
  id,
  showLabel,
  name,
  value,
  handleOnChange,
  selectOptions
}) => {

  const options = selectOptions.map(option => <option key={option} value={option}>{option}</option>)

  return (
    <div className='selectLabel'>
      <label htmlFor={id} className={`selectLabel__label${showLabel ? '' : '--visuallyHidden'}`}>{labelText}</label>
      <select
        className='selectLabel__select'
        id={id}
        name={name}
        value={value}
        onChange={handleOnChange}
      >
        {options}
      </select>
    </div>
  )
}

export default SelectLabel