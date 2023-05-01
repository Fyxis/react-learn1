import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from "react-router-dom"
import { useState, useEffect } from 'react'
import { CartShopping } from "./Icons"
import { getCartItems } from "./CartUtils"
import Home from "./Home"
import './style.css'

const Navbar = () => {
	function setActiveTab(event) {
		const navLinks = document.querySelectorAll(".nav-link")
		navLinks.forEach((link) => {
			link.classList.remove("active")
		})
		event.target.classList.add("active")
	}
	
	const [cartItems, setCartItems] = useState([]);
	useEffect(() => {
		// dapatkan item-item pada keranjang belanja saat komponen Navbar dipasang pada DOM
		const items = getCartItems();
		setCartItems(items);

		// update notifikasi jumlah item pada keranjang belanja
		const cartNotification = document.querySelector(".cart-notification");
		cartNotification.innerText = items.length;
	}, []);
	return (
		<Router>
			<>
				<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top pt-3 pb-3 pdlc pdrc">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							<h1 class="brand-text">
								Bagus<span>pedia</span>
							</h1>
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div
							class="collapse navbar-collapse justify-content-end"
							id="navbarNav"
						>
							<ul class="navbar-nav">
								<li class="nav-item">
									<Link
										to="/cart"
										className="nav-link"
										onClick={(e) => {
											setActiveTab(e)
										}}
									>
										<span>
											<CartShopping className="fa-cart-shopping" />
											<span className="cart-notification">
												{cartItems.length}
											</span>
										</span>
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/home"
										className="nav-link"
										onClick={(e) => {
											setActiveTab(e);
										}}
									>
										Home
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/products"
										className="nav-link"
										onClick={(e) => {
											setActiveTab(e);
										}}
									>
										Products
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/contact"
										className="nav-link"
										onClick={(e) => {
											setActiveTab(e);
										}}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route exact path="/home" element={<Home />} />
				</Routes>
			</>
		</Router>
	);
}
export default Navbar
