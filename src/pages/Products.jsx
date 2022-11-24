import React from "react";
import { NavLink } from "react-router-dom";
import { DATA } from "../DATA";
import priceFormat from "../util/priceFormat";

const Product = () => {
  const cartItem = (item) => {
    return (
      <div
        className="card my-4 mx-auto py-2"
        style={{ width: "18rem" }}
        key={item._id.$oid}
      >
        <img src={item.img1} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">{priceFormat(item.price)}</p>
          <NavLink
            to={`/products/${item._id.$oid}`}
            className="btn btn-outline-primary"
          >
            <i className="fa fa-eye me-1"></i>
            View Detail
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="col-12 text-center">
          <h1>Product</h1>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="row">{DATA.map(cartItem)}</div>
      </div>
    </div>
  );
};

export default Product;
