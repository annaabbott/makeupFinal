import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import image from "../images/placeholderImg.jpg";

const bottomRow = {
    display: "flex",
    justifyContent: "space-between",
  };

  const cardStyle = {
    width: "300px",
  };
  

const CartItemCard = ({ categoryName, product }) => {

    function removeItem() {
<p>Removed from cart</p>      }

    return(
        <Card sx={cardStyle}>
        <CardContent>
          <h2>{product.brand || "(Generic)"}</h2>
          <div style={{ height: "3em" }}>{product.name}</div>
          {product.image_link ? (
            <CardMedia component="img" height="140" src={product.image_link} />
          ) : (
            <CardMedia component="img" height="140" image={image} />
          )}
          <div>$ {Math.round(product.price).toFixed(2)}</div>
          <Box sx={bottomRow}>
            <Button onClick={removeItem}>Remove From Cart</Button>
  
          </Box>
        </CardContent>
      </Card>
    )
}

export default CartItemCard;