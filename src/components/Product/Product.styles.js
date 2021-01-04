import styled from 'styled-components'
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledProduct = styled.div`
  .product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${Colors['dark-blue']};
    a {
      color: inherit;
      display: block;
    }
    img {
      max-width: 100%;
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
  }
`;