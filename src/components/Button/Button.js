import React from 'react';

// styles
import { StyledButton } from './Button.styles'

const Button = ({ color, children }) => {
  return (
    <StyledButton className="btn" color={color}>
      {children}
    </StyledButton>
  ) 
}


export default Button;