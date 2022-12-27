import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import "./navbar.scss"
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const products = useSelector(state => state.cart.products);

	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<div className="flag">
						<img src={require('../../img/en.png')} alt="" />
						<KeyboardArrowDownIcon />
					</div>
					<div className="usd">
						USD
						<KeyboardArrowDownIcon />
					</div>
					<div className="men">
						<Link className="link" to="/products/2">
							Men
						</Link>
					</div>
					<div className="women">
						<Link className="link" to="/products/1">
							Women
						</Link>
					</div>
					<div className="children">
						<Link className="link" to="/products/3">
							Children
						</Link>
					</div>
					<div className="accessories">
						<Link className="link" to="/products/4">
							Accessories
						</Link>
					</div>
				</div>
				<div className="center">
					<span className="logo">
						<Link className="link" to="/">
							CHECAGO STORE
						</Link>
					</span>
				</div>
				<div className="right">
					<div className="item">
						<Link className="link" to="/">
							Homepage
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							About
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Contact
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Stores
						</Link>
					</div>
					<div className="icons">
						<SearchIcon className='icon' />
						<PersonOutlineOutlinedIcon className='icon' />
						<FavoriteBorderIcon className='icon' />
						<div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
							<ShoppingCartOutlinedIcon className='icon' />
							<div className="cartItems">
								{products.length}
							</div>
						</div>
					</div>
				</div>
			</div>
			{cartOpen && <Cart />}
		</div>
	)
}

export default Navbar