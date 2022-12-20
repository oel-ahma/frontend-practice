import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from "@mui/icons-material";

const Featured = () => {
  return (
	<div className="featured">
		<div className="top">
			<h1 className="title">Total Revenue</h1>
			<MoreVertOutlinedIcon fontSize="small"/>
		</div>
		<div className="bottom">
			<div className="featuredChart">
				<CircularProgressbar value={33} text={"33%"} strokeWidth={3}/>
			</div>
			<p className="title">Total sales made today</p>
			<p className="amount">$999</p>
			<p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
			<div className="summary">
				<div className="item">
					<div className="title">Target</div>
					<div className="result negative">
						<KeyboardArrowDownOutlined fontSize="small"/>
						<div className="amount">$12.4k</div>
					</div>
				</div>
				<div className="item">
					<div className="title">Last week</div>
					<div className="result negative">
						<KeyboardArrowDownOutlined fontSize="small"/>
						<div className="amount">$12.4k</div>
					</div>
				</div>
				<div className="item">
					<div className="title">Last month</div>
					<div className="result positive">
						<KeyboardArrowUpOutlined fontSize="small"/>
						<div className="amount">$12.4k</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Featured