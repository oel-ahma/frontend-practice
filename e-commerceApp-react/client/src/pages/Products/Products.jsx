import "./products.scss"
import List from "../../components/List/List"
import { useParams } from "react-router-dom"
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getCategoryImgUrl } from "../../makeImgUrl";

const Products = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1500);
	const [sort, setSort] = useState("asc");
	const [selectedSubCats, setSelectedSubCats] = useState([]);

	const { data, loading, error } = useFetch(`/sub-categories?populate=deep&[filters][categories][id][$eq]=${catId}`);
	const handleChange = (e) => {
		setSelectedSubCats(
			e.target.checked
				? [...selectedSubCats, e.target.value]
				: selectedSubCats.filter((item) => item !== e.target.value)
		);
	};

	return (
		<div className="products">
			<div className="left">
				<div className="prodCategories">
					<h2>Product Categories</h2>
					<div className="checkItems">
						{data?.map((item) =>
							<div className="check" key={item.id}>
								<input type="checkbox" id={item.id} value={item.id} onChange={(e) => handleChange(e)} />
								<label htmlFor={item.id}>{item.attributes.title}</label>
							</div>
						)}
					</div>
				</div>
				<div className="filter">
					<h2>Filter by price</h2>
					<div className="range">
						<span>0</span>
						<input type="range" min={0} max={1500} onChange={(e) => setMaxPrice(e.target.value)} />
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="sort">
					<h2>Sort by</h2>
					<div className="sortRadio">
						<div className="item">
							<input type="radio" id="asc" value="asc" name="price" onChange={() => setSort("asc")} />
							<label htmlFor="asc">Price (Lowest first)</label>
						</div>
						<div className="item">
							<input type="radio" id="desc" value="desc" name="price" onChange={() => setSort("desc")} />
							<label htmlFor="dsc">Price (Highest first)</label>
						</div>

					</div>
				</div>
			</div>
			<div className="right">
				<div className="topImg">
					{error
						? "Something wrong happend!"
						: loading
							? "loading"
							: <img src={getCategoryImgUrl(data, catId)} alt="" />
					}
				</div>
				<div className="cards">
					<List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
				</div>
			</div>
		</div>
	)
}

export default Products