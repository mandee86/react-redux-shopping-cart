import React from 'react';
import { Colors } from '../../styles/theme/Theme.styles'
import formatCurrency from '../../utils';

// components
import Button from '../Button/Button'

// styles
import { StyledProduct } from './Product.styles'

const Product = ({ product, addToCart, openModal }) => {

  return (
    <>
    <StyledProduct>
      <a href={`#${product._id}`} className="product">
        <img
          src={product.image}
          alt={product.title}
          onClick={() => openModal(product)}
        />
        <p>{product.title}</p>
        <div className="product-price">
          <div>
            {formatCurrency(product.price)}
          </div>
          <Button
            onClick={() => addToCart(product)}
            color={Colors['gray']}
          >
            Add to cart
          </Button>
        </div>
      </a>
    </StyledProduct>
    </>
  ) 
}


export default Product;