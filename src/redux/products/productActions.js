import axios from 'axios'

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './productActionTypes'

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = () => {
  // return with a function witch dispatch the fetchProductRequest
  return async (dispatch) => {
    // first set loading to true
    dispatch(fetchProductRequest)

    await axios.get('http://localhost:5000/api/products')
      // if the request was successful get back the response
      .then(response => {
        const products = response.data
        dispatch(fetchProductsSuccess(products))
      })
      // if the request failed get back the error message
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchProductsFailure(errorMsg))
      })
  }
}