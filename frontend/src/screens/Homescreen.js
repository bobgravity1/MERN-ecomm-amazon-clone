import React, {useEffect} from 'react'
import Product from '../components/Product'
import Loadingbox from '../components/Loadingbox'
import Messagebox from '../components/Messagebox'
import {useSelector,useDispatch} from 'react-redux'
import {listProducts} from '../actions/productActions'

const HomeScreen = () => {
const productList=useSelector((state)=>state.productList)
const {loading, error, products}=productList
const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(listProducts())
  },[])

  return (
    <>
    {loading?(<Loadingbox />)
    :
    error?(<Messagebox variant='danger'>{error}</Messagebox>):(
      <div className='row center'>
    {products.map(product=>(
      <Product key={product._id} product={product} />
    ))
  }
      </div>
    )}

    </>
  )
}

export default HomeScreen
