import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductDataContext from "../providers/ProductDataContext";
import ProductCard from "../components/ProductCard";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";

const CategoryPage = () => {
  const productContext = useContext(ProductDataContext);
  const { categoryName } = useParams();

  if (productContext.isLoading) {
    return <div>Loading . . .</div>;
  }

  const category = productContext.products.find((c) => c.name === categoryName);
  if (!category) {
    return (
      <div>Error: This product category {categoryName} is unavailable.</div>
    );
  }

  return (
    <>
      <CssBaseline></CssBaseline>
      <Container>
        <h3>Showing all {categoryName}</h3>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {category.items.map((item) => (
            <ProductCard
              key={item.id}
              categoryName={categoryName}
              product={item}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default CategoryPage;
