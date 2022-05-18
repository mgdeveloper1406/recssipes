import './Textarea.css'

const Textarea = ({ 
  labelText, 
  id,
  name, 
  value, 
  handleOnChange, 
  required = false
}) => {
  
  return (
    <div className='textarea_div'>
      <label htmlFor={id} className='label_textarea'>{labelText}</label>
      <textarea  className='text_area'
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