import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from '../components/Product'
import Loadingbox from '../components/Loadingbox'
import Messagebox from '../components/Messagebox'

const HomeScreen = () => {
  const [products, setProducts]=useState([]);
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState(false)

  useEffect(()=>{
    const fetchData=async()=>{
    try{
      setLoading(true)
      const {data}=await axios.get('/api/products')
      setLoading(false)
      setProducts(data)
    }catch(err){
      setError(err.message)
      setLoading(false)
    }
    }
    fetchData()
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
