import { ADD_CART } from "../actions/cart-actions";
import { REMOVE_CART } from "../actions/cart-actions";

const items = [];

const addItem = (state = items, action) => {
  switch (action.type) {
    case ADD_CART:
      // console.log(...state);
      // console.log(action.payload);
      return [...state, action.payload];

    case REMOVE_CART:
      return (state = state.filter((item) => {
        // console.log(state);
        // console.log(item);
        // console.log(item.category);
        // console.log(item._id.$oid);
        // console.log(action);

        return item._id.$oid !== action.payload._id.$oid;
      }));

    default:
      return state;
  }
};

export default addItem;
