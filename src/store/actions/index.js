// For Add Item To Cart
export const addCart = (product) => {
  return {
    type: "ADD_CART",
    payload: product,
  };
};

// For Delete Item From Cart
export const deleteCart = (product) => {
  return {
    type: "DELETE_CART",
    payload: product,
  };
};
