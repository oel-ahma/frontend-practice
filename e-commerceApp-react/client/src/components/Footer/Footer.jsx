import "./footer.scss"
import { Link } from "react-router-dom";

const Footer = () => {
return (
	<div className="footer">
		<div className="wrapper">
			<div className="top">
				<div className="items">
					<h2>Categories</h2>
					<div className="men">
						<Link className="link" to="/products/1">
							Men
						</Link>
					</div>
					<div className="women">
						<Link className="link" to="/products/2">
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
					<div className="newArrivals">
						<Link className="link" to="/products/5">
							New Arrivals
						</Link>
					</div>
				</div>
				<div className="items">
					<h2>Links</h2>
					<div className="faq">
						<Link className="link" to="/">
							FAQ
						</Link>
					</div>
					<div className="pages">
						<Link className="link" to="/">
							Pages
						</Link>
					</div>
					<div className="stores">
						<Link className="link" to="/">
							Stores
						</Link>
					</div>
					<div className="compare">
						<Link className="link" to="/">
							Compare
						</Link>
					</div>
					<div className="cookies">
						<Link className="link" to="/">
							Cookies
						</Link>
					</div>
				</div>
				<div className="items">
					<h2>About</h2>
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis dolorem optio, reiciendis vel quasi distinctio officia explicabo cumque blanditiis, unde hic incidunt repudiandae sequi porro illum pariatur cupiditate fuga.</span>
				</div>
				<div className="items">
					<h2>Contact</h2>
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis dolorem optio, reiciendis vel quasi distinctio officia explicabo cumque blanditiis, unde hic incidunt repudiandae sequi porro illum pariatur cupiditate fuga.</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<div className="logo">CheCago STORE</div>
					<span>© Copyright 2023. All Rights Reserved</span>
				</div>
				<div className="right">
					<img src={require("../../img/payment.png")} alt="" />
				</div>
			</div>
		</div>
	</div>
)
}

export default Footer