import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

import handleCart from "./reducers/handleCart";

const rootReducer = combineReducers({
  handleCart,
});

const store = createStore(rootReducer);

export default store;

// const redux = require('redux');

// const counterReducer = (state, action)=> {
//     if (action.type === 'increment' ) {
//         return {
//             counter: state.counter + 1
//         }
//     };

//     if (action.type === 'decrement' ) {
//         return {
//             counter: state.counter - 1
//         }
//     }

//     return state;
// }

// const store = store.createStore(counterReducer);

// const counterSubscriber = () => {
//     const latesStore = store.getState();
//     console.log(latesStore);
// }

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });
