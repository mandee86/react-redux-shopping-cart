import styled from 'styled-components'
import { Colors } from '../styles/theme/Theme.styles'

export const StyledHeader = styled.header`
  background-color: ${Colors['dark-blue']};
  color: ${Colors['white']};
  padding: 10px 20px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;