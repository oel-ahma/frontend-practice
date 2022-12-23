import "./card.scss"
import { Link } from "react-router-dom"
import { useState } from "react"

const Card = ({data}) => {
	const [backImg, setBackImg] = useState(true);
	
	const showBackImg = () => {
		data.img2 && setBackImg(!backImg);
	}

	return (

		<Link className="link" to={`/product/${data.id}`}>
		<div className="card">
			<div className="container">
				<img src={data.img} alt="" className="img1" style={{opacity: `${backImg * 1}`}} onMouseEnter={showBackImg} onMouseLeave={showBackImg}/>
				{data.img2 && <img src={data.img2} alt="" className="img2" />}
				{data.isNew && <div className="label">New Season</div>}
			</div>
			<h2>{data.title}</h2>
			<div className="prices">
				<div className="oldprice">
					${data.oldprice}
				</div>
				<div className="price">
					${data.price}
				</div>
			</div>
		</div>
		</Link>
	)
}

export default Card