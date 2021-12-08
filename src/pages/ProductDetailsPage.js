import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductDataContext from "../providers/ProductDataContext";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CartContext from "../providers/CartContext";

const ProductDetailsPage = () => {
  const productContext = useContext(ProductDataContext);
  const { productId, categoryName } = useParams();
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  if (productContext.isLoading) {
    return <div>Loading . . .</div>;
  }

  const category = productContext.products.find((c) => c.name === categoryName);
  if (!category) {
    return (
      <div>Error: This product category {categoryName} is unavailable.</div>
    );
  }

  const _id = parseInt(productId);
  const product = category.items.find((i) => i.id === _id);
  if (!product) {
    return <div>Error: This product {productId} is unavailable.</div>;
  }

  function continueShopping() {
    navigate(-1);
  }

  const addToCartHandler = (event) => {
    cartCtx.addToCartHandler(product);
  };

  return (
    <>
      <CssBaseline></CssBaseline>
      <Container>
        <Box>
          <Typography id="transition-modal-title" variant="h5" component="h2">
            {product?.name}
          </Typography>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{marginTop: 4}}
          >
            <img src={product?.image_link} alt="product" />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {product?.description}
            </Typography>
          </Stack>
          <Button variant="contained" sx={{marginTop: 1, marginRight: 1}} onClick={addToCartHandler}>Add to Cart</Button>
          <Button variant="contained" sx={{marginTop: 1, marginLeft: 1}} onClick={continueShopping}>Continue Shopping</Button>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
