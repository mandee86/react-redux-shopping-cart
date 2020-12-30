import styled from 'styled-components'
// import { Colors } from '../../styles/Theme.styles'

export const StyledProducts = styled.div`
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      width: 33%;
      padding: 10px;
      a {
        display: block;
      }
      .product {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
          max-width: 100%;
        }
      }
    }
  }
`;