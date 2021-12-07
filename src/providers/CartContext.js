import React, { createContext, useReducer } from "react";

const initialReducerState = {
  items: [],
  totalAmount: 0,
  total: 0
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
      newItems.push({...action.item});
    }

    return {
      items: newItems,
      totalAmount: state.totalAmount + action.item.price,
      total: state.total + 1
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
