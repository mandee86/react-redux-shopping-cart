import React from 'react';

// styles
import { StyledButton } from './Button.styles'

const Button = ({ color, children, onClick, classes, type = "button" }) => {
  return (
    <StyledButton type={type} className={[classes, "btn"].join(" ")} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  ) 
}


export default Button;