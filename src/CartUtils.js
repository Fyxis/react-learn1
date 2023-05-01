const CART_ITEMS_KEY = "cartItems"
export const addToCart = (item) => {
	// tambahkan item ke keranjang belanja
	let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
	cartItems.push(item);
	localStorage.setItem("cartItems", JSON.stringify(cartItems));

	// kirim notifikasi ke Navbar
	const cartNotification = document.querySelector(".cart-notification");
	cartNotification.innerText = cartItems.length;
};

export function getCartItems() {
	let cartItems = localStorage.getItem(CART_ITEMS_KEY);
	if (cartItems) {
		return JSON.parse(cartItems);
	} else {
		return [];
	}
}