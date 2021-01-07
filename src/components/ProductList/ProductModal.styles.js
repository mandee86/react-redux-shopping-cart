import styled from 'styled-components'

export const StyledProductModal = styled.div`
  .product-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: 96%;
    img {
      max-height: 100%;
      max-width: 50%;
      margin: 0 auto;
    }
    .product-details-description {
      flex: 1;
      margin: 10px;
    }
    .product-price {
      display: flex;
      align-items: center;
      .btn {
        margin-left: 15px;
      }
    }
  }
`;