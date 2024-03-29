import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import image from "../images/placeholderImg.jpg";
import Stack from "@mui/material/Stack";
import Container from '@mui/material/Container';

import CartContext from "../providers/CartContext";

const cartCardStyle = {
  width: "100%",
  marginBottom: "2em"
};

const CartItemCard = ({ categoryName, product }) => {
  const cartCtx = useContext(CartContext);

function removeFromCartHandler(id) {
  cartCtx.removeFromCartHandler(product.id);
}

const price = Math.round(product.price).toFixed(2)

  return (
    <Card sx={cartCardStyle}>
      <CardContent>
        <h2>{product.brand || "(Generic)"}</h2>
        <Stack direction="row">
          {product.image_link ? (
            <CardMedia component="img" sx={{height:140, width: 140}} src={product.image_link} />
          ) : (
            <CardMedia component="img" sx={{height:140, width: 140}} image={image} />
          )}
          <Container style={{ height: "3em" }}>{product.name}</Container>
          <Container>Individual Price: $&nbsp;{price}</Container>
          <Container>Quantity: {product.count}</Container>
          <Container>Total price: $&nbsp;{(product.count * price).toFixed(2)}</Container>
          <Container >
            <Button  variant="outlined" onClick={ removeFromCartHandler}>Remove From Cart</Button>
          </Container>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
