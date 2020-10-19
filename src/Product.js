import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							// eslint-disable-next-line
							<p>⭐</p>
						))}
				</div>
			</div>

			<img src={image} alt="" className="" />

			<button className="">Add to Basket</button>
		</div>
	);
}

export default Product;
