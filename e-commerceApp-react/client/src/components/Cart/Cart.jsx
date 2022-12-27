import "./cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux'
import { makeImgUrl } from "../../makeImgUrl";
import { removeItem, resetCart } from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";

const Cart = () => {
	const products = useSelector(state => state.cart.products)
	const dispatch = useDispatch();

	const stripePromise = loadStripe(
		'pk_test_51MJgQxAM3p3VLCoxS4SpoqdSkTUcYrdNRm0VOtridnlco8v64hUICX2uvvEQmKkiJtn6tGvWaarlbqu4lp5P77rz00LiptqXWI'
		);

	const handlePayment = async () => {
		try {
			const stripe = await stripePromise;
			const res = await makeRequest.post("/orders", { products });
			console.log(res.data.stripeSession.id)
			await stripe.redirectToCheckout({
				sessionId: res.data.stripeSession.id
			});
		} catch (err) {
			// console.error(err);
		}
	}

	return (
		<div className="cart">
			<span className="cartTitle">Products in your cart</span>
			<div className="cartItems">
				{products.map((item) =>
					<div className="center"  key={item.id}>
						<img src={makeImgUrl(item?.img)} alt="" />
						<div className="item">
							<span className="title">{item.title}</span>
							<span className="desc">{item.desc.substring(0, 100)}</span>
							<span className="quantity">{item.quantity} x ${item.price}</span>
						</div>
						<div className="icon" onClick={() => dispatch(removeItem(item.id))}>
							<DeleteOutlineIcon id={item.id}/>
						</div>
					</div>
				)}
			</div>
			<div className="total">
				SUBTOTAL
				<span>
					${products.reduce((acc, value) => 
						acc + (value.price * value.quantity) 
					 , 0).toFixed(2)}
				</span>
			</div>
			<div className="bottom">
				<button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
				<span onClick={() => dispatch(resetCart())}>Reset Cart</span>
			</div>
		</div>
	)
}

export default Cart