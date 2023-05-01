import { Link, BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import './style.css'
const CategorySection = () => {
	const category = document.querySelectorAll("card-category")
	
	return (
		<>
			<div class="container border">
				<h1 class="card-title mb-4 mt-2 f-category cabin-font">Category</h1>
				<div class="row mb-3">
					<div class="category col-2">
						<div class="card pointer">
							<img
								src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp"
								alt="Category 1"
								class="card-img"
								id="card-category"
							/>
						</div>
					</div>
					<div class="category col-2">
						<div class="card pointer">
							<img
								src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp"
								alt="Category 2"
								class="card-img"
								id="card-category"
							/>
						</div>
					</div>
					<div class="category col-2">
						<div class="card pointer">
							<img
								src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg.webp"
								alt="Category 3"
								class="card-img"
								id="card-category"
							/>
						</div>
					</div>
					<div class="category col-2">
						<div class="card pointer">
							<img
								src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp"
								alt="Category 4"
								class="card-img"
								id="card-category"
							/>
						</div>
					</div>
					<div class="category col-2">
						<div class="card pointer">
							<img
								src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/11/3127195/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg.webp"
								alt="Category 5"
								class="card-img"
								id="card-category"
							/>
						</div>
					</div>
					<div class="category col-2">
						<div class="card pointer">
							<img
								src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp"
								alt="Category 6"
								class="card-img"
								id="card-category"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CategorySection;
