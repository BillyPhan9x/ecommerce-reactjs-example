import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { removeItem } from "../redux/actions/cart-actions";
import priceFormat from "../util/priceFormat";

const Cart = () => {
  const state = useSelector((state) => state.addItem);

  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(removeItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div
        className="container px-4 my-5 bg-light rounded-3"
        key={cartItem._id.$oid}
      >
        <div className="container py-4">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => {
              handleClose(cartItem);
            }}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img1}
                alt={cartItem.name}
                height={200}
                width={180}
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.name}</h3>
              <p className="lead fw-bold">{priceFormat(cartItem.price)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container px-4 my-5 bg-light rounded">
        <div className="container py-4">
          <div className="row text-center">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row w-25 mx-auto">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5">
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
