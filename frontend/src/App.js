import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
	return (
		<BrowserRouter>
			<div className="grid__container">
				<header className="row">
					<div>
						{/*<button onClick="openMenu">#9776</button>*/}
						<a className="brand" href="/">
							Amazon
						</a>
					</div>
					<div>
						<a href="/cart">Cart</a>
						<a href="/signin">Signin</a>
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
