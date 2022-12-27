import "./featuredProducts.scss"
import Card from "../Card/Card"
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

	const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

	return (
		<div className="featuredProducts">
			<div className="top">
				<h1>{type} Products</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quo omnis modi fuga, quasi sint veniam tempore molestiae laborum adipisci, illum perferendis minus deserunt dolores ea deleniti, esse neque? Ut.</p>
			</div>
			<div className="bottom">
				{error ?
					"Something went wrong"
					: loading
					? "loading"
					: data?.map(item => <Card data={item} key={item.id} />)}
			</div>
		</div>
	)
}

export default FeaturedProducts