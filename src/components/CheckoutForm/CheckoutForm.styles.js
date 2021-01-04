import styled from 'styled-components';
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledCheckoutForm = styled.form`
  width: 100%;
  padding: 0;
  list-style-type: none;
  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    padding: 3px;
    input {
      padding: 3px;
      border: 1px solid ${Colors['black']}
    }
  }
`;