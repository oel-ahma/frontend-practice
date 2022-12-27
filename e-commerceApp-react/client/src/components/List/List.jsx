import React from 'react'
import Card from "../../components/Card/Card"
import "./list.scss"
import useFetch from '../../hooks/useFetch';

const List = ({ subCats, catId, maxPrice, sort }) => {



	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(item =>
			`&[filters][sub_categories][id][$eq]=${item}
		`)}
		&[filters][price][$lt]=${maxPrice}
		&sort=price:${sort}`
	);
	return (
		<div className='list'>
			{error
				? "Something went wrong!"
				: loading
					? "loading"
					: data?.length !== 0
						? data?.map(item =>
							<Card data={item} key={item.id} />
						)
						: "Oops we don't have this :("
			}
		</div>
	)
}

export default List