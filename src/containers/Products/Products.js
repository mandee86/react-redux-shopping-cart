import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// data
import data from '../../data/data.json'

// layout
import Main from '../../layouts/Main';

// components
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import Cart from '../../components/Cart/Cart'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

// styles
import { StyledProductsContainer } from './Products.styles'

// actions
import { fetchProducts } from '../../redux/products/productActions';

const Products = ({ items, fetchProducts}) => {

  // product list
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  // filter
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  // cart & checkout
  const [showCheckout, setShowCheckout] = useState(false);

  // ~ componentDidMount, componentDidUpdate ...
  useEffect(() => {
    fetchProducts()
  }, [])

  const filterProducts = (event) => {
    const productsArr = [...items]
    const filteredProducts = productsArr.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)

    // imp
    if(event.target.value === "") {
      setSize(event.target.value);
      setProducts(items)
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

    const productsArr = [...items];
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
    <Main>
      <Main.Content>
        <Filter
          count={products.length}
          size={size}
          sort={sort}
          filterProducts={filterProducts}
          sortProducts={sortProducts}
        />
        {!items ? (
          <div>Loading...</div>
        ) : (
            <ProductList
            products={items}
            addToCart={addToCart}
          />
        )}
      </Main.Content>
      <Main.SideBar>
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
      </Main.SideBar>
    </Main> 
  ) 
}

// get products from redux store as props (access to redux store)
const mapStateToProps = state => {
  // console.log(state.products.products)
  return {
    items: state.products.products
  }
}

// dispatch actions by props
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);