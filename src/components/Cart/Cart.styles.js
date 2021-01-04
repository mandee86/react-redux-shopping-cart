import styled from 'styled-components'
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledCart = styled.div`
  .cart {
    padding: 7px;
    display: flex;
  }
  .cart-header {
    border-bottom: 1px solid ${Colors['black']}
  }
  .cart-items {
    padding: 0;
    width: 100%;
    list-style: none;
    img {
      width: 100px;
    }
    li {
      display: flex;
      div {
        padding: 5px;
        &:last-child {
          flex: 1;
        }
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    > span, > button {
      flex: 1;
    }
    > span {
      font-weight: bold;
    }
  }
`;