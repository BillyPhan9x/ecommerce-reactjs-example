import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartBtn = () => {
  // we get a state of addItems
  // write the name of the file not the function
  const prodState = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span>Cart (
        {prodState.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
