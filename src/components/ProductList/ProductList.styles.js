import styled from 'styled-components'

export const StyledProductList = styled.div`
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
    }
  }
  /* modal */
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
  }
`;