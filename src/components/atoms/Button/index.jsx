import { useRef } from 'react';

import './styles.scss'



const Button = ({ 
  ButtonWidth
}) => {
  return (
      <button 
        className={`
          defaultButton
          button__width--${ButtonWidth}
        `}
      ></button>
  )
}

export default Button