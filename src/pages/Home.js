import { useContext } from "react";
import ProductCategory from "../components/ProductCategory";
import { TransitionGroup } from "react-transition-group";
import ProductDataContext from "../providers/ProductDataContext";
import Loader from "../components/Loader";
import Collapse from "@mui/material/Collapse";

function Home() {
  const productContext = useContext(ProductDataContext);

  console.log(`Render <Home> - isLoading=${productContext.isLoading}`)
  return (
    <TransitionGroup>
      {productContext.products.length > 0 &&
        productContext.products.map((category) => (
          <Collapse key={category.name}>
            <ProductCategory category={category} />
          </Collapse>
        ))}
      {productContext.isLoading ? <Loader /> : <div/>}
    </TransitionGroup>
  );
}

export default Home;
