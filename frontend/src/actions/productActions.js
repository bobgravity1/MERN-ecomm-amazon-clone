import {PRODUCT_LIST_REQUEST} from '../constants/productConstants'
import {PRODUCT_LIST_SUCCESS} from '../constants/productConstants'
import {PRODUCT_LIST_FAIL} from '../constants/productConstants'

import {PRODUCT_DETAIL_REQUEST} from '../constants/productConstants'
import {PRODUCT_DETAIL_SUCCESS} from '../constants/productConstants'
import {PRODUCT_DETAIL_FAIL} from '../constants/productConstants'
import axios from 'axios'


export const listProducts=()=>async(dispatch)=>{
  //HERE WE ARE DISPATCHING THE REQUEST
  dispatch({
    type:PRODUCT_LIST_REQUEST
  })
  try{
    //THEN WE FETCH THE DATA FROM THE BACKEND (APP.GET('/API/PRODUCTS'))//
        const {data}=await axios.get('/api/products')
        console.log(data)
        dispatch({type:PRODUCT_LIST_SUCCESS, payload:data});
  }catch(err){
    dispatch({type:PRODUCT_LIST_FAIL, payload:err.message})
  }
}

export const detailsProduct=(productId)=>async(dispatch)=>{
  dispatch({
    type:PRODUCT_DETAIL_REQUEST,
    payload:productId
  })
  try{
    const {data}=await axios.get(`/api/products/${productId}`)
    dispatch({
      type:PRODUCT_DETAIL_SUCCESS,
      payload:data })
  }
catch(err){
  console.log('error')
  dispatch({type:PRODUCT_DETAIL_FAIL,
  payload:err.response.statusText})
}
}
