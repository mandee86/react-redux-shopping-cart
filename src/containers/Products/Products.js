import React, { useState } from 'react';

// data
import data from '../../data/data.json'

// components
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'

// styles
import { StyledProductsContainer } from './Products.styles'

const Products = () => {

  const [products, setProducts] = useState(data.products);
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
    const sortedProducts = productsArr.slice().sort((a, b) => (
      sort === "lowest" ? 
        ((a.price > b.price) ? 1 : -1) : 
      sort === "highest" ? 
        ((a.price < b.price) ? 1 : -1) : 
        // the newest
        ((a._id < b._id) ? 1 : -1)
    ))
    setProducts(sortedProducts)
  }

  return (
    <StyledProductsContainer>
      <Filter
        count={products.length}
        size={size}
        sort={sort}
        filterProducts={filterProducts}
        sortProducts={sortProducts}
      />
      <ProductList
        products={products}
      />
    </StyledProductsContainer>
    
  ) 
}

export default Products;