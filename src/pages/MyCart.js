import { Fragment } from "react";
import { Container } from "@mui/material";
import CartItemCard from "../components/CartItemCard";

import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


const MyCart = (props) => {
  const navigate = useNavigate();

  const cartItems = [
    { id: "item1", name: "example", amount: 2, price: 12.99 },
  ].map((item) => <CartItemCard key={item.id} name product={item} />);

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

export default MyCart;
