import React from 'react';

// styles
import { StyledProductList } from './ProductList.styles'

// components
import Product from '../Product/Product'

const ProductList = ({ products, addToCart }) => {
  
  return (
    <StyledProductList>
      <h2>Product list</h2>
      <ul className="product-list">
        {products && products.map(product => {
          return (
            <li key={product._id}>
              <Product
                product={product}
                addToCart={addToCart}
              />
            </li>
          )
        })}
      </ul>
    </StyledProductList>
  )
}

export default ProductList;