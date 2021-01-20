import React from 'react'
import data from '../data'
import Product from '../components/Product.js'

const Homescreen = () => {
  return (
    <>
    <div className="row center">
    {data.products.map((product)=>(
<Product key={product._id} product={product} />
    ))}
</div>
</>
  )
}

export default Homescreen
