import React from 'react';

// components
import Product from '../../components/Product/Product'

// styles
import { StyledProducts } from './Products.styles'

const Products = ({ products }) => {
  return (
    <StyledProducts>
      <h2>Product list</h2>
      <ul className="product-list">
        {products && products.map(product => {
          return (
            <li key={product._id}>
              <Product product={product} />
            </li>
          )
        })}
      </ul>
    </StyledProducts>
  ) 
}

export default Products;