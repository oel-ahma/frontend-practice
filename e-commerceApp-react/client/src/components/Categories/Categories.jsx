import { useState } from "react";
import "./categories.scss"
import { Link } from "react-router-dom"

const Categories = () => {
	const imgs = [
		"https://images.pexels.com/photos/5772131/pexels-photo-5772131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

		"https://images.pexels.com/photos/7280266/pexels-photo-7280266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

		"https://images.pexels.com/photos/5560515/pexels-photo-5560515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

		"https://images.pexels.com/photos/6544079/pexels-photo-6544079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

		"https://images.pexels.com/photos/9222796/pexels-photo-9222796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

		"https://images.pexels.com/photos/5975370/pexels-photo-5975370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	];

	const INITIALE_STATE = [true, true, true, true, true, true];

	const [hover, setHover] = useState(INITIALE_STATE);

	const changeColor = (e) => {
		const newHover = hover.map((value, index) => {
			if (index === e.currentTarget.id) {
				return !value;
			}
			return value;
		})
		setHover(newHover);
	}
	// debugger;
	return (
		<div className="categories">
			<div className="col">
				<div className="row" id="0" onMouseEnter={e => changeColor(e)} onMouseLeave={e => setHover(INITIALE_STATE)}>
					<img alt="" src={imgs[0]} />
					<Link to={"/products/1"} >
						<button style={{ backgroundColor: hover[0] ? "white" : "#2978F5", color: hover[0] ? "black" : "white" }}>SALE</button>
					</Link>
				</div>
				<div className="row" id="1" onMouseEnter={e => changeColor(e)} onMouseLeave={() => setHover(INITIALE_STATE)}>
					<img alt="" src={imgs[1]} />
					<Link to={"/products/2"}>
						<button style={{ backgroundColor: hover[1] ? "white" : "#2978F5", color: hover[1] ? "black" : "white" }}>WOMEN</button>
					</Link>
				</div>
			</div>
			<div className="col-m" id="2" onMouseEnter={e => changeColor(e)} onMouseLeave={() => setHover(INITIALE_STATE)}>
				<img alt="" src={imgs[3]} />
				<Link to={"/products/3"}>
					<button style={{ backgroundColor: hover[2] ? "white" : "#2978F5", color: hover[2] ? "black" : "white" }}>NEW SEASON</button>
				</Link>
			</div>
			<div className="col-l">
				<div className="row row-l">
					<div className="col" id="3" onMouseEnter={e => changeColor(e)} onMouseLeave={() => setHover(INITIALE_STATE)}>
						<img alt="" src={imgs[2]} />
						<Link to={"/products/0"}>
							<button style={{ backgroundColor: hover[3] ? "white" : "#2978F5", color: hover[3] ? "black" : "white" }}>MEN</button>
						</Link>
					</div>
					<div className="col" id="4" onMouseEnter={e => changeColor(e)} onMouseLeave={() => setHover(INITIALE_STATE)}>
						<img alt="" src={imgs[4]} />
						<Link to={"/products/0"}>
							<button style={{ backgroundColor: hover[4] ? "white" : "#2978F5", color: hover[4] ? "black" : "white" }}>ACCESSORIES</button>
						</Link>
					</div>
				</div>
				<div className="row" id="5" onMouseEnter={e => changeColor(e)} onMouseLeave={() => setHover(INITIALE_STATE)}>
					<img alt="" src={imgs[5]} />
					<Link to={"/products/6"}>
						<button style={{ backgroundColor: hover[5] ? "white" : "#2978F5", color: hover[5] ? "black" : "white" }}>SHOES</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Categories