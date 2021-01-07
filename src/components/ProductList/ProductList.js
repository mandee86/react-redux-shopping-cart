import React, { useState } from 'react';

// styles
import Fade from 'react-reveal/Fade';
import { StyledProductList } from './ProductList.styles'
import { StyledProductModal } from './ProductModal.styles'

// components
import MyModal from '../Modal/Modal';
import Product from '../Product/Product'
import Button from '../Button/Button';
import formatCurrency from '../../utils';

const ProductList = ({ products, addToCart }) => {

  const [productModal, setProductModal] = useState(null);

  const onOpenModal = (product) => {
    setProductModal(product)
  }
 
  const onCloseModal = () => {
    setProductModal(null);
  }
  
  return (
    <>
      {/* product list */}
      <StyledProductList>
        <h2>Product list</h2>
        <Fade bottom cascade>
          <ul className="product-list">
            {products && products.map(product => {
              return (
                <li key={product._id}>
                  <Product
                    product={product}
                    addToCart={addToCart}
                    openModal={onOpenModal}
                  />
                </li>
              )
            })}
          </ul>
        </Fade>
      </StyledProductList>

      {/* if product exists show the modal */}
      {productModal && (
        <MyModal
          closeModal={onCloseModal}
          isOpen={productModal ? true : false}
        >
          <StyledProductModal>
            <div className="product-details">
              <img src={productModal.image} alt={productModal.title} />
              <div className="product-details-description">
                <p>
                  <strong>{productModal.title}</strong>
                </p>
                <p>{productModal.description}</p>
                <p>
                  Available sizes: {" "}
                  {productModal.availableSizes.map(size => {
                    return (
                      <span key={size}>
                        {" "}
                        <Button>{size}</Button>
                      </span>
                    )
                  })}
                </p>
                <div className="product-price">
                  <div>
                    {formatCurrency(productModal.price)}
                  </div>
                  <Button
                    onClick={() => {
                      addToCart(productModal);
                      onCloseModal()
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </StyledProductModal>
        </MyModal>
      )}
    </>
  )
}

export default ProductList;