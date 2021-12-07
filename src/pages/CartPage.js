import { Fragment, useContext } from "react";
import { Container } from "@mui/material";
import CartItemCard from "../components/CartItemCard";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CartContext from "../providers/CartContext";

const CartPage = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.state.items.map((item) => <CartItemCard key={item.id} name product={item} />);

  function continueShopping() {
   navigate(-1);
  }

  return (
    <Fragment>
      <Container>
        <div>
          <h2>My Cart</h2>
        </div>
        <div>{cartItems}</div>
<div><Button >Purchase Items</Button></div>
<Button onClick={continueShopping}>Continue Shopping</Button>
      </Container>
    </Fragment>
  );
};

export default CartPage;
