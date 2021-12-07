import { Fragment } from "react";
import { Routes, Route }  from "react-router-dom";

import Header from "./components/Header";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CategoryPage from "./pages/CategoryPage";
import MyCart from "./pages/MyCart";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products/:categoryName/:productId" element={<ProductDetailsPage />} />
        <Route path="/products/:categoryName" element={<CategoryPage />} />
        <Route path="/myCart/cart" element={<MyCart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
