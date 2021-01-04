import React, { useState } from 'react';

// components
import Button from '../Button/Button'

// styles
import { StyledCheckoutForm } from './CheckoutForm.styles'

const CheckoutForm = ({ createOrder }) => {

  const [checkoutDatas, setCheckoutDatas] = useState({ name: "", email: "", address: ""});

  const changeInput = (e) => {
    const _checkoutDatas = {...checkoutDatas};
    _checkoutDatas[e.target.name] = e.target.value;

    setCheckoutDatas(_checkoutDatas)
  }

  return (
    <StyledCheckoutForm onSubmit={createOrder} className="form-container">
      <ul className="form-container">
        <li>
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            onChange={(e) => changeInput(e)}
          /> 
        </li>
        <li>
          <label>Name</label>
          <input
            name="name"
            type="text"
            required
            onChange={(e) => changeInput(e)}
          /> 
        </li>
        <li>
          <label>Address</label>
          <input
            name="address"
            type="text"
            required
            onChange={(e) => changeInput(e)}
          /> 
        </li>
        <li>
          <Button
          type="submit"
          onClick={(e) => createOrder(e, checkoutDatas)}
        >
          Checkout
        </Button>
        </li>
      </ul>
    </StyledCheckoutForm>
  ) 
}

export default CheckoutForm;