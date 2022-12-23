import "./products.scss"
import List from "../../components/List/List"
import { useParams } from "react-router-dom"
import { useState } from "react";

const Products = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1500);
	const [sort, setSort] = useState(null);

	console.log(catId);

  return (
		<div className="products">
			<div className="left">
				<div className="prodCategories">
					<h2>Product Categories</h2>
					<div className="checkItems">
						<div className="check">
							<input type="checkbox" id="1" value={1}/>
							<label htmlFor="1">Shoes</label>
						</div>
						<div className="check">
							<input type="checkbox" id="2" value={2}/>
							<label htmlFor="2">Hat</label>
						</div>
						<div className="check">
							<input type="checkbox" id="3" value={2}/>
							<label htmlFor="3">Sneakers</label>
						</div>
					</div>
				</div>
				<div className="filter">
					<h2>Filter by price</h2>
					<div className="range">
						<span>0</span>
						<input type="range" min={0} max={1500} onChange={(e) => setMaxPrice(e.target.value)}/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="sort">
					<h2>Sort by</h2>
					<div className="sortRadio">
						<div className="item">
							<input type="radio" id="asc" value="asc" name="price" onChange={() => setSort("asc")}/>
							<label htmlFor="asc">Price (Lowest first)</label>
							</div>
						<div className="item">
							<input type="radio" id="dsc" value="dsc" name="price" onChange={() => setSort("dsc")}/>
							<label htmlFor="dsc">Price (Highest first)</label>
						</div>
							
					</div>
				</div>
			</div>
			<div className="right">
				<div className="topImg">
					<img src="https://images.pexels.com/photos/10252550/pexels-photo-10252550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
				</div>
				<div className="cards">
					<List catId={catId} maxPrice={maxPrice} sort={sort}/>
				</div>
			</div>
		</div>
	)
}

export default Products