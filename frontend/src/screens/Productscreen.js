import React from "react";
import data from "../data";
import Rating from "../components/Rating.js";

const Productscreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>product not found!</div>;
  }
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1"></div>
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </li>
          <li>price: {product.price}</li>
          <li>description: {product.description}</li>
        </ul>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price:</div>
                  <div className="price">{product.price}</div>
                </div>
              </li>

              <li>
                <div className="row">
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
    </>
  );
};

export default Productscreen
