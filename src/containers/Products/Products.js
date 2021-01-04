import React, { useState } from 'react';

// data
import data from '../../data/data.json'

// components
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import Cart from '../../components/Cart/Cart'

// styles
import { StyledProductsContainer } from './Products.styles'

const Products = () => {

  const [products, setProducts] = useState(data.products);
  const [cartItems, setCartItems] = useState([])
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

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
    const cartItemsArr = [...cartItems];
    let alreadyInCart = false;

    // 
    cartItemsArr.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    })

    if(!alreadyInCart) {
      // add product as a new item
      cartItemsArr.push({...product, count: 1})
    }
  
    setCartItems(cartItemsArr)
  }

  const removeFromCart = (product) => {
    const cartItemsArr = [...cartItems];
    const filteredArr = cartItemsArr.filter(item => item._id !== product._id);
    
    setCartItems(filteredArr)
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
        />
      </div>
    </> 
  ) 
}

export default Products;