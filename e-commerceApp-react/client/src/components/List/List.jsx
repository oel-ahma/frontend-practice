import React from 'react'
import Card from "../../components/Card/Card"
import "./list.scss"

const List = () => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Long Sleeve Graphic T-shirt",
			oldprice: 19,
			isNew: true,
			price: 12
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Test2",
			oldprice: 99,
			isNew: true,
			price: 24
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			img2: "https://images.pexels.com/photos/14448229/pexels-photo-14448229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Test3",
			oldprice: 19,
			price: 12
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Test4",
			oldprice: 19,
			price: 12
		}
	]

  return (
	<div className='list'>
		{data?.map(item => 
			<Card data={item} key={item.id}/>
		)}	
	</div>
  )
}

export default List