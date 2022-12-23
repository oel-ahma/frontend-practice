import { useState } from "react";
import "./product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
	const item = {
		id: 1,
		img: [
			"https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		],
		title: "Long Sleeve Graphic T-shirt",
		oldprice: 19,
		isNew: true,
		price: 12
	};

	const [quantity, setQuantity] = useState(0);
	const [selectedImage, setSelectedImage] = useState(item.img[0]);

	return (
		<div className="product">
			<div className="left">
				{item.img.map(((e, i) =>
					<div className="item" key={i}>
						<img src={e} alt="" onClick={(e) => setSelectedImage(e.target.src)}/>
					</div>
				))}
			</div>
			<div className="center">
				<img src={selectedImage} alt="" />
			</div>
			<div className="right">
				<h2>{item.title}</h2>
				<span>${item.price}</span>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iusto quam porro sequi quisquam iure nam, perferendis dignissimos ex quaerat corrupti necessitatibus ut reprehenderit eius id odio! Architecto, consectetur alias.</p>
				<div className="quantity">
					<button className="quantityButton" onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}>-</button>
					<span>{quantity}</span>
					<button className="quantityButton" onClick={() => setQuantity(quantity + 1)}>+</button>
				</div>
				<div className="addToCart">
					<AddShoppingCartIcon />
					<span>ADD TO CART</span>
				</div>
				<div className="addTo">
					<FavoriteBorderIcon/>
					<span>ADD TO WISH LIST</span>
					<BalanceIcon/>
					<span>ADD TO COMPARE</span>
				</div>
			</div>
		</div>
	)
}

export default Product