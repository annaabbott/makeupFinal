import { Fragment, useContext } from "react";
import ProductCategory from "../components/ProductCategory";

import ProductDataContext from "../providers/ProductDataContext";
import Loader from "../components/Loader";

function Home() {
  const productContext = useContext(ProductDataContext);

  return (
    <Fragment>
      {productContext.products.length > 0 &&
        productContext.products.map((category) => <ProductCategory key={category.name} category={category} />)}
      {productContext.isLoading && <Loader />}
    </Fragment>
  );
}

export default Home;
