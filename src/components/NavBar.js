import { Fragment, useContext } from "react";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { useNavigate } from "react-router-dom";


import CartContext from "../providers/CartContext";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box"
import { Typography } from "@mui/material";

const NavBar = (props) => {
  const cartCtx = useContext(CartContext);
  const identity = useIdentityContext();
  const navigate = useNavigate();
  const greeting = `Hello, ${identity.user?.user_metadata?.full_name}`;

  const cartItemsTotal = cartCtx.state.totalCount;
  
  const signInHandler = () => {
    navigate("/signin");
  };

  const signUpHandler = () => {
    navigate("/signup");
  };

  const signOutHandler = () => {
    identity.logout();
    navigate("/");
  };

  const navigateHomeHandler = () => {
    navigate("/")
  }

  const cartHandler = () => {
    navigate(`MyCart/cart`);
  }

  return (
    <Stack direction="row" spacing={2} sx={{justifyContent: "space-between", width: "1200px"}}>
      <h1 onClick={navigateHomeHandler} style={{cursor:"pointer"}}>React Drug Store Cosmetics</h1>

      <Box sx={{display: "flex", alignItems: "center", "&>*": {margin:"8px"}}}>
      <Button
        startIcon={<ShoppingCartIcon />}
        onClick={cartHandler}
        sx={{ marginTop: "1rem" }}
      >
        My Cart
        <span
          style={{
            backgroundColor: "#fff",
            color: "#1976d2",
            marginLeft: "16px",
            paddingLeft: "10px",
            paddingTop: "2px",
            paddingRight: "10px",
            paddingBottom: "2px",
            borderRadius: "16px",
          }}
        >
          {cartItemsTotal}
        </span>
      </Button>
      {identity.user && (
        <Fragment>
          <Typography variant="h6" sx={{marginTop: "1rem", marginRight: "1rem"}}>{greeting}</Typography>
          <Button
            variant="contained"
            onClick={signOutHandler}
            sx={{ marginTop: "1rem" }}
          >
            Sign Out
          </Button>
        </Fragment>
      )}

      {!identity.user && (
        <Fragment>
          <Button
            variant="contained"
            sx={{ marginTop: "1rem", marginRight: "1rem"}}
            onClick={signInHandler}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            sx={{ marginTop: "1rem" }}
            onClick={signUpHandler}
          >
            Sign Up
          </Button>
        </Fragment>
      )}
      </Box>
    </Stack>
  );
};

export default NavBar;
