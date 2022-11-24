export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

export const addItem = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: REMOVE_CART,
    payload: product,
  };
};
