import React from 'react';
import formatCurrency from '../../utils';

// components
import Button from '../Button/Button'

// styles
import { StyledCart } from './Cart.styles'

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <StyledCart>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">
          cart is empty
        </div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} in the cart
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map(item => {
              return (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="text-right">
                      {formatCurrency(item.price)} x {item.count} {" "}
                      <Button
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              <span>
                Total: {" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </span>
              <Button>Proceed</Button>
            </div>
          </div>
        )}
      </div>
    </StyledCart>
  ) 
}

export default Cart;