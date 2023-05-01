import { addToCart } from "./CartUtils";
import { useRef, useEffect } from 'react'
import "./style.css";

	const FeaturedProducts = () => {
		const titleRefs = useRef([]);
		const descRefs = useRef([]);
		const priceRefs = useRef([]);

		const handleAddToCart = (index) => {
			const title = titleRefs.current[index].innerText;
			const price = priceRefs.current[index].innerText;
			const desc = descRefs.current[index].innerText;
			addToCart({
			name: title,
			price: price,
			description: desc
			});
		};

		const addToRefs = (ref, refsArray) => {
			if (ref && !refsArray.current.includes(ref)) {
			refsArray.current = [...refsArray.current, ref];
			}
		};

		useEffect(() => {
			const buttons = document.querySelectorAll(".add");
			buttons.forEach((button, index) => {
				button.addEventListener("click", () => handleAddToCart(index));
			});

			// cleanup event listeners
			return () => {
				buttons.forEach((button, index) => {
					button.removeEventListener("click", () => handleAddToCart(index));
				});
			};
		}, []);

		// const btn_addToCart = document.querySelectorAll(".add");
		// btn_addToCart.forEach((button) => {
		// 	button.addEventListener("click", handleAddToCart);
		// })
		return (
			<>
				<section class="featured-products py-5">
					<div class="container border">
						<h1 class="text-left mb-4 mt-2">Featured Products</h1>
						<div class="row">
							<div class="col-lg-3 col-md-6 mb-4">
								<div class="card card2">
									<img src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/7/8/65f82911-e08f-4c64-9e55-ee393f4d5c84.jpg" />
									<div class="card-body">
										<h5
											class="card-title"
											ref={(ref) => addToRefs(ref, titleRefs)}
										>
											Karpet
										</h5>
										<p class="card-text" ref={(ref) => addToRefs(ref, descRefs)}>
											Ini Karpet
										</p>
										<p class="card-text" ref={(ref) => addToRefs(ref, priceRefs)}>
											<strong>Rp5.000</strong>
										</p>
										<a class="btn btn-primary add">Add to Cart</a>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 mb-4">
								<div class="card card2">
									<img src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/7/8/65f82911-e08f-4c64-9e55-ee393f4d5c84.jpg" />
									<div class="card-body">
										<h5
											class="card-title"
											ref={(ref) => addToRefs(ref, titleRefs)}
										>
											Kursi
										</h5>
										<p class="card-text" ref={(ref) => addToRefs(ref, descRefs)}>
											Ini Kursi
										</p>
										<p class="card-text" ref={(ref) => addToRefs(ref, priceRefs)}>
											<strong>Rp20.000</strong>
										</p>
										<a class="btn btn-primary add">Add to Cart</a>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 mb-4">
								<div class="card card2">
									<img src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/7/8/65f82911-e08f-4c64-9e55-ee393f4d5c84.jpg" />
									<div class="card-body">
										<h5
											class="card-title"
											ref={(el) => (titleRefs.current[2] = el)}
										>
											Meja
										</h5>
										<p class="card-text" ref={(el) => (descRefs.current[2] = el)}>
											Ini Meja
										</p>
										<p
											class="card-text"
											ref={(el) => (priceRefs.current[2] = el)}
										>
											<strong>Rp15.000</strong>
										</p>
										<a class="btn btn-primary add">Add to Cart</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
};
export default FeaturedProducts;
