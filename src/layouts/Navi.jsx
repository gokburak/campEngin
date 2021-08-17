import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}

            {isAuthenticated ? (
              <SignedIn SignOut={handleSignOut} />
            ) : (
              <SignedOut SignIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
