import { useState } from "react";
import "./cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
	const INITIAL_DATA = [{
		id: 1,
		img: [
			"https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		],
		title: "Long Sleeve Graphic T-shirt",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio aliquam iure alias tempore at ab officia temporibus vero pariatur, tempora autem ratione illum, modi consequatur obcaecati odit. Veritatis, ducimus.",
		oldprice: 19,
		isNew: true,
		price: 12.9
	},
	{
		id: 2,
		img: [
			"https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		],
		title: "Awesome Sneakers",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio aliquam iure alias tempore at ab officia temporibus vero pariatur, tempora autem ratione illum, modi consequatur obcaecati odit. Veritatis, ducimus.",
		oldprice: 22,
		isNew: true,
		price: 149.9
	}
	];

	const [cartItems, setCartItems] = useState(INITIAL_DATA);

	const changeCartItems = (id) => {
		setCartItems(cartItems.filter(item => item.id !== id));
	}

	const resetCart = () => {
		setCartItems(INITIAL_DATA);
	}

	return (
		<div className="cart">
			<span className="cartTitle">Products in your cart</span>
			<div className="cartItems">
				{cartItems.map((item) =>
					<div className="center"  key={item.id}>
						<img src={item?.img[0]} alt="" />
						<div className="item">
							<span className="title">{item.title}</span>
							<span className="desc">{item.desc.substring(0, 100)}</span>
							<span className="quantity">1 x ${item.price}</span>
						</div>
						<DeleteOutlineIcon id={item.id} className="icon" onClick={(e) => changeCartItems(parseInt(e.target.id))} />
					</div>
				)}
			</div>
			<div className="total">
				SUBTOTAL
				<span>
					${cartItems.reduce((acc, obj) => {
						return acc + obj.price
					}, 0)}
				</span>
			</div>
			<div className="bottom">
				<button>PROCEED TO CHECKOUT</button>
				<span onClick={() => resetCart()}>Reset Cart</span>
			</div>
		</div>
	)
}

export default Cart