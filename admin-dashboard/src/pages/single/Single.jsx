import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from "../../components/chart/Chart"
import List from '../../components/table/Table'
import "./single.scss"


const Single = () => {
  return (
		<div className="single">
			<Sidebar/>
			<div className="singleContainer">
				<Navbar/>
				<div className="top">
					<div className="left">
						<div className="editButton">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img src="https://images.pexels.com/photos/51340/rat-pets-eat-51340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg"/>
							<div className="details">
								<h1 className="itemTitle">Cutie Mouse</h1>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">cutiemouse@gmail.com</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">+33 6 66 45 67 89</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">
										Elton St. 234 Garden Yd. NewYork
									</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Country:</span>
									<span className="itemValue">USA</span>
								</div>
							</div>
						</div>
					</div>
					<Chart className="right"/>
				</div>
				<div className="bottom">
					<h1 className="title">Last Transactions</h1>
					<List/>
				</div>
			</div>
		</div>
	)
}

export default Single