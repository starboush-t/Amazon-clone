import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

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
							{cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
						</Link>
						<Link to="/signin">Signin</Link>
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
