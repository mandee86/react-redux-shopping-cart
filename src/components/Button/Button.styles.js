import styled from 'styled-components'
import { darken } from 'polished'
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledButton = styled.button`
  background-color: ${props => props.color ? props.color : Colors['orange']};
  &:hover {
    background-color: ${props => props.color ? darken(0.1, props.color) : darken(0.1, Colors['orange'])};
  }
`;