import styled from 'styled-components'
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledProduct = styled.div`
  .product {
    color: inherit;
  }
  .product-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
  }
`;