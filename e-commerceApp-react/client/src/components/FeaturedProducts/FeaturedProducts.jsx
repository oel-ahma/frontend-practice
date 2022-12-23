import "./featuredProducts.scss"
import Card from "../Card/Card"

const FeaturedProducts = ({type}) => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg",
			img2: "https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg",
			title: "Long Sleeve Graphic T-shirt",
			oldprice: 19,
			isNew: true,
			price: 12
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg",
			title: "Test2",
			oldprice: 99,
			isNew: true,
			price: 24
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg",
			img2: "https://images.pexels.com/photos/14448229/pexels-photo-14448229.jpeg",
			title: "Test3",
			oldprice: 19,
			price: 12
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg",
			title: "Test4",
			oldprice: 19,
			price: 12
		}
	]

	return (
	<div className="featuredProducts">
		<div className="top">
			<h1>{type} Products</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quo omnis modi fuga, quasi sint veniam tempore molestiae laborum adipisci, illum perferendis minus deserunt dolores ea deleniti, esse neque? Ut.</p>
		</div>
		<div className="bottom">
			{data.map(item => 
				<Card data={item} key={item.id}/>
			)}			
		</div>
	</div>
  )
}

export default FeaturedProducts