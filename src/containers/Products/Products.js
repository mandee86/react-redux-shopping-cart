import React, { useState } from 'react';

// data
import data from '../../data/data.json'

// components
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import Cart from '../../components/Cart/Cart'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

// styles
import { StyledProductsContainer } from './Products.styles'

const Products = () => {

  // product list
  const [products, setProducts] = useState(data.products);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  // filter
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  // cart & checkout
  const [showCheckout, setShowCheckout] = useState(false);

  const filterProducts = (event) => {
    const productsArr = [...data.products]
    const filteredProducts = productsArr.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)

    // imp
    if(event.target.value === "") {
      setSize(event.target.value);
      setProducts(data.products)
    }
    else {
      setSize(event.target.value)
      setProducts(filteredProducts)
    }
  }

  const sortProducts = (event) => {
    // impl
    const sort = event.target.value
    setSort(event.target.value)

    const productsArr = [...data.products];
    const sortedProducts = productsArr.sort((a, b) => (
      sort === "lowest" ? 
        ((a.price > b.price) ? 1 : -1) : 
      sort === "highest" ? 
        ((a.price < b.price) ? 1 : -1) : 
        // the newest
        ((a._id < b._id) ? 1 : -1)
    ))
    setProducts(sortedProducts)
  }

  const addToCart = (product) => {
    // clone copy
    // const cartItems = cartItems.slice()
    // or
    const _cartItems = [...cartItems];
    let alreadyInCart = false;

    // 
    _cartItems.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    })

    if(!alreadyInCart) {
      // add product as a new item
      _cartItems.push({...product, count: 1})
    }
  
    setCartItems(_cartItems);
    localStorage.setItem('cartItems', JSON.stringify(_cartItems))
  }

  const removeFromCart = (product) => {
    const _cartItems = [...cartItems];
    const filteredCartItems = _cartItems.filter(item => item._id !== product._id);
    
    setCartItems(filteredCartItems)
    localStorage.setItem('cartItems', JSON.stringify(filteredCartItems))
  }

  const createOrder = (e, checkoutDatas) => {
    e.preventDefault();
    const order = {
      ...checkoutDatas,
      cartItems
    }

    alert(`Need to save to db ${order}`)
  }

  return (
    <>
      <div className="main">
        <Filter
          count={products.length}
          size={size}
          sort={sort}
          filterProducts={filterProducts}
          sortProducts={sortProducts}
        />
        <ProductList
          products={products}
          addToCart={addToCart}
        />
      </div>
      <div className="sidebar">
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          showCheckout={() => setShowCheckout(true)}
        />
        {showCheckout && (
          <CheckoutForm 
            createOrder={createOrder}
          />
        )}
      </div>
    </> 
  ) 
}

export default Products;