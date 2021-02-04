import React, {useEffect} from "react";
import Rating from "../components/Rating.js";
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {detailsProduct} from '../actions/productActions'

const Productscreen = (props) => {

const dispatch=useDispatch();
const product=useSelector(state=>state.productDetails)
console.log(product)
const productId=props.match.params.id
useEffect(()=>{
  dispatch(detailsProduct(productId))
},[productId, dispatch])


  return (
    <div>
    <Link to='/'>Back to results</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.brand} />
        </div>
        <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </li>
          <li>price: {product.price}</li>
          <li>description:
          <p>{product.description}        </p>
          </li>
        </ul>
</div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{product.price}</div>
                </div>
              </li>
              <li>
                <div className="row row-align">
                  <div>status:</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">add to cart</button>
              </li>
            </ul>
          </div>
          </div>
</div>
      </div>
  );
};

export default Productscreen
