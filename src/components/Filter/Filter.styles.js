import styled from 'styled-components'
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 5px 0;
  border-bottom: 1px solid ${Colors['dark-blue']};
  div {
    flex: 1
  }
`;