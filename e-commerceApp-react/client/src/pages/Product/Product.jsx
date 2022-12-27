import { useState } from "react";
import "./product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { makeImgUrl } from "../../makeImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {

	const id = useParams().id;
	const [quantity, setQuantity] = useState(1);

	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
	const [selectedImage, setSelectedImage] = useState(0);

	const dispatch = useDispatch();

	return (
		<div className="product">
			{error
				? "Something wrong happend!"
				: loading
					? ("loading")
					: (
						<>
							<div className="left">
								{data?.attributes.images.data.map(((e, i) =>
									<div className="item" key={i}>
										<img src={makeImgUrl(e)} alt="" onClick={() => setSelectedImage(i)} />
									</div>
								))}
							</div>
							<div className="center">
								<img src={makeImgUrl(data?.attributes?.images?.data[selectedImage])} alt="" />
							</div>
							<div className="right">
								<h2>{data?.attributes?.title}</h2>
								<span>${data?.attributes?.price}</span>
								<p>{data?.attributes?.description}</p>
								<div className="quantity">
									<button className="quantityButton" onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}>-</button>
									<span>{quantity}</span>
									<button className="quantityButton" onClick={() => setQuantity(quantity + 1)}>+</button>
								</div>
								<div className="addToCart" onClick={() =>
									dispatch(addToCart({
										id: data?.id,
										quantity: quantity,
										price: data?.attributes?.price,
										title: data?.attributes?.title,
										desc: data?.attributes?.description,
										img: data?.attributes?.images.data[0]
									}))}>
									<AddShoppingCartIcon />
									<span >ADD TO CART</span>
								</div>
								<div className="addTo">
									<FavoriteBorderIcon />
									<span>ADD TO WISH LIST</span>
									<BalanceIcon />
									<span>ADD TO COMPARE</span>
								</div>
							</div>
						</>
					)}
		</div>
	)
}

export default Product