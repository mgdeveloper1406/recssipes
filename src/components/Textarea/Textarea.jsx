const Textarea = ({ 
  labelText, 
  id,
  name, 
  value, 
  handleOnChange, 
  required = false
}) => {
  
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <textarea
        id={id}
        name={name}
        value={value} 
        onChange={handleOnChange}
        required
      >
      </textarea>
    </div>
  )
}

export default Textarea