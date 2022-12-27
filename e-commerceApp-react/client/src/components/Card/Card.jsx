import "./card.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { makeImgUrl } from "../../makeImgUrl";

const Card = ({data}) => {
	const [backImg, setBackImg] = useState(true);
	
	const showBackImg = () => {
		data?.attributes?.images?.data[1] && setBackImg(!backImg);
	}


	return (

		<Link className="link" to={`/product/${data?.id}`}>
		<div className="card">
			<div className="container">
				<img src={makeImgUrl(data?.attributes?.images?.data[0])} alt="" className="img1" style={{opacity: `${backImg * 1}`}} onMouseEnter={showBackImg} onMouseLeave={showBackImg}/>
				{data?.attributes?.images?.data[1] && <img src={makeImgUrl(data?.attributes?.images?.data[1])} alt="" className="img2" />}
				{data?.attributes.isNew && <div className="label">New Season</div>}
			</div>
			<h2>{data?.attributes.title}</h2>
			<div className="prices">
				<div className="oldprice">
					${(data?.attributes.oldprice || data?.attributes.price + 20).toFixed(2)}
				</div>
				<div className="price">
					${data?.attributes.price}
				</div>
			</div>
		</div>
		</Link>
	)
}

export default Card