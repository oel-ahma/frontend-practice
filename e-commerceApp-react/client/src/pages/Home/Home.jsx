import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Slider from "../../components/Slider/Slider"



const Home = () => {
  return (
	<div className="home">
		<Slider/>
		<FeaturedProducts type={"Featured"}/>
		<Categories />
		<FeaturedProducts type={"Trending"}/>
		<Contact />
	</div>
  )
}

export default Home