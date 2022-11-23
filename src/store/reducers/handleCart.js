const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_CART":
      // check if product is Already exit
      const existingAdd = state.find((item) => item.id === product.id);
      if (existingAdd) {
        // Increase the Quantity
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

    case "DELETE_CART":
      const existingDelete = state.find((item) => item.id === product.id);
      if (existingDelete.quantity === 1) {
        return state.filter((item) => item.id !== existingDelete.id);
      } else {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

    default:
      return state;
  }
};

export default handleCart;
