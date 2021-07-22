import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Route, Link } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SinginScreen from "./screens/SinginScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const sginOutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid__container">
        <header className="row">
          <div>
            {/*<button onClick="openMenu">#9776</button>*/}
            <Link className="brand" to="/">
              Amazon
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down" />
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={sginOutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Signin</Link>
            )}
          </div>
        </header>
        {/*
				<aside className="sidebar">
					<h3>Shopping Category</h3>
					<button onclick="closeMenu()">X</button>
					<ul>
						<li><a href="#">Shirts</a></li>
						<li><a href="#">Pants</a></li>
					</ul>
				</aside>
				*/}
        <main className="main">
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SinginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={PaymentMethodScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row center">
          <p>All rights reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
