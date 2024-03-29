import * as React from "react";
import { useNavigate } from "react-router";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductCategory = ({ category, categoryName, product }) => {
  const navigate = useNavigate();

  function seeAll() {
    navigate(`/products/${category.name}`);
  }

  return (
    <div>
      <CssBaseline />
      <Container>
        <Box />
        <h3>{category.name}</h3>
        <Stack
          direction="row"
          // divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          justifyContent="space-around"
        >
          <ProductCard
            key={category.items[0].id}
            categoryName={category.name}
            product={category.items[0]}
          />
          <ProductCard
            key={category.items[1].id}
            categoryName={category.name}
            product={category.items[1]}
          />
          <ProductCard
            key={category.items[2].id}
            categoryName={category.name}
            product={category.items[2]}
          />
          <ProductCard
            key={category.items[3].id}
            categoryName={category.name}
            product={category.items[3]}
          />
          <Button variant="outlined" onClick={seeAll}>
            See All {category.name}{" "}
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default ProductCategory;
