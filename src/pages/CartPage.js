import { Fragment, useContext } from "react";
import { Container } from "@mui/material";
import CartItemCard from "../components/CartItemCard";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CartContext from "../providers/CartContext";
import Stack from "@mui/material/Stack";
import { TransitionGroup } from "react-transition-group";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import Collapse from "@mui/material/Collapse";

const CartPage = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const identity = useIdentityContext();
  const title = identity.user
    ? `${identity.user.user_metadata.full_name}'s Cart`
    : "My Cart";

  const cartItems = cartCtx.state.items.map((item) => (
    <Collapse key={item.id}>
      <CartItemCard name product={item} />
    </Collapse>
  ));

  function continueShopping() {
    navigate(-1);
  }

  return (
    <Fragment>
      <Container>
        <div>
          <h2>{title}</h2>
        </div>
        {cartItems.length ? (
          <TransitionGroup>{cartItems}</TransitionGroup>
        ) : (
          <div>Your cart is currently empty.</div>
        )}
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
