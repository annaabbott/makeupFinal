import { Fragment, useContext, useState } from "react";
import { Container } from "@mui/material";
import CartItemCard from "../components/CartItemCard";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CartContext from "../providers/CartContext";
import Stack from '@mui/material/Stack';
import { TransitionGroup } from 'react-transition-group';

const CartPage = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
 

  const cartItems = cartCtx.state.items.map((item) => (
    <CartItemCard key={item.id} name product={item} />
  ));

  function continueShopping() {
    navigate(-1);
  }

  return (
    <Fragment>
      <Container>
        <div>
          <h2>My Cart</h2>
        </div>
        { cartItems.length ? <div>{cartItems}</div> : <div>Your cart is currently empty.</div>}
        <Stack direction="row" spacing={2} mt={2} mb={2}>
          <Button variant="contained" disabled>
            Purchase Items
          </Button>
        
        <Button variant="contained" onClick={continueShopping}>
          Continue Shopping
        </Button>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default CartPage;
