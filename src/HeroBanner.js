import './style.css'
const HeroBanner = () => {
    return (
			<>
				<section class="hero-section py-5 mtc">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-6 plc">
								<h1>Shop the latest trends in fashion</h1>
								<p class="my-4 fs-description cabin-font">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Itaque harum atque illo odio doloribus officiis, perspiciatis
									omnis debitis recusandae
								</p>
								<button class="btn btn-primary">Shop Now</button>
							</div>
							<div class="col-lg-6">
								<div class="hero-banner-carousel">
									<img
										src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/4/23/231668b4-688f-4200-acbd-8fc47af1dbdf.jpg?ect=4g"
										alt="Fashion Model"
										class="img-fluid ml-2"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
}
export default HeroBanner