import './burgerMenu.scss'
import { Link } from 'react-router-dom'

const BurgerMenu = () => {
	return (
		<div className='burgerMenu'>
				<Link className="link" to="/">Homepage</Link>
				<Link className="link" to="/products/2">Men</Link>
				<Link className="link" to="/products/1">Women</Link>
				<Link className="link" to="/products/3">Accessoires</Link>
				<Link className="link" to="/">Contact</Link>
				<Link className="link" to="/">About</Link>
		</div>
	)
}

export default BurgerMenu







