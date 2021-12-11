import React, { createContext, useEffect, useReducer } from "react";

const CART_CONTEXT = "cart_context";

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

    const newState = {
      ...state,
      items: newItems,
      totalAmount:
        state.totalAmount +
        Math.round(parseFloat(action.item.price).toFixed(2)),
      totalCount: state.totalCount + 1,
    };

    localStorage.setItem(CART_CONTEXT, JSON.stringify(newState));

    return newState;
  } else if (action.type === "REMOVE") {
    const item = state.items.find((i) => i.id === action.id);
    if (!item) {
      return state;
    }

    const newItems = state.items.filter((i) => i.id !== item.id);
    const newState = {
      ...state,
      items: newItems,
      totalAmount:
        state.totalAmount -
        Math.round(parseFloat(item.price).toFixed(2)) * item.count,
      totalCount: state.totalCount - item.count,
    };
    localStorage.setItem(CART_CONTEXT, JSON.stringify(newState));

    return newState;
  } else if (action.type === "LOAD_LOCAL_STORAGE") {
    return action.state;
  }

  return state;
};

export function CartProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, initialReducerState);

  useEffect(() => {
    const text = localStorage.getItem(CART_CONTEXT);
    if (!text) {
      return;
    }

    dispatch({ type: "LOAD_LOCAL_STORAGE", state: JSON.parse(text) });
  }, []);

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
