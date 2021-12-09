import React, { createContext, useReducer } from "react";

const initialReducerState = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
};

const initialContextState = {
  state: initialReducerState,
  addToCartHandler: (item) => {},
  removeFromCartHandler: (id) => {},
};

const CartContext = createContext(initialContextState);

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let found = 0;
    const newItems = state.items.map((item) => {
      if (item.id === action.item.id) {
        found = true;
        return {
          ...item,
          count: item.count + 1,
        };
      } else {

        return item;
      }
    });

    if (!found) {
      newItems.push({ ...action.item, count: 1 });
    }

    return {
      ...state,
      items: newItems,
      totalAmount: state.totalAmount + Math.round(parseFloat(action.item.price).toFixed(2)),
      totalCount: state.totalCount + 1,
    };
  } else if (action.type === "REMOVE") {
    const item = state.items.find((i) => i.id === action.id);
    if (!item) {
      return state;
    }

    const newItems = state.items.filter((i) => i.id !== item.id);
    return {
      ...state,
      items: newItems,
      totalAmount: state.totalAmount -  (Math.round(parseFloat(action.item.price).toFixed(2)) * item.count),
      totalCount: state.totalCount - item.count
    };
  }

  return state;
};

export function CartProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, initialReducerState);

  const addToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{ state, addToCartHandler, removeFromCartHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
