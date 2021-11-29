import * as React from "react";
import Divider from "@mui/material/Divider";
//import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
//import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import ProductCard from "./ProductCard";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const ProductCategory = ({category}) => {
  return (
    <div>
      <CssBaseline />
      <Container>
        <Box />
        <h3>{category.name}</h3>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <ProductCard key={category.items[0].id} categoryName={category.name} product={category.items[0]}/>
          <ProductCard key={category.items[1].id} categoryName={category.name} product={category.items[1]}/>
          <ProductCard key={category.items[2].id} categoryName={category.name} product={category.items[2]}/>
          <ProductCard key={category.items[3].id} categoryName={category.name} product={category.items[3]}/>
          {/* <ProductCard>See All Category Name</ProductCard> */}
        </Stack>
      </Container>
    </div>
  );
};

export default ProductCategory;
