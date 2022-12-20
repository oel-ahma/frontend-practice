import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);
	
	return (
	<div className="sidebar">
		<div className="top">
			<Link to="/" style={{ textDecoration: "none" }}>
				<span className="logo">che_admin</span>
			</Link>
		</div>
		<hr />
		<div className="center">
			<ul>
				<p>MAIN</p>
				<Link to="/" style={{ textDecoration: "none" }}>
					<li>
						<DashboardRoundedIcon className="icons" />
						<span>Dashboard</span>
					</li>
				</Link>
				<p>LISTS</p>
				<Link to="/users" style={{ textDecoration: "none" }}>
					<li>
						<PeopleAltRoundedIcon className="icons"/>
						<span>Users</span>
					</li>
				</Link>
				<Link to="/products" style={{ textDecoration: "none" }}>
					<li>
						<SellRoundedIcon className="icons"/>
						<span>Products</span>
					</li>
				</Link>
				<li>
					<CreditCardRoundedIcon className="icons"/>
					<a href="">Orders</a>
				</li>
				<li>
					<LocalShippingRoundedIcon className="icons"/>
					<a href="">Delivery</a>
				</li>
				<p>USEFUL</p>
				<li>
					<LeaderboardRoundedIcon className="icons"/>
					<a href="">Stats</a>
				</li>
				<li>
					<NotificationsActiveRoundedIcon className="icons"/>
					<a href="">Notifications</a>
				</li>
				<p>SERVICE</p>
				<li>
					<MonitorHeartRoundedIcon className="icons"/>
					<a href="">System Health</a>
				</li>
				<li>
					<ExploreRoundedIcon className="icons"/>
					<a href="">Logs</a>
				</li>
				<li>
					<SettingsRoundedIcon className="icons"/>
					<a href="">Settings</a>
				</li>
				<p>USER</p>
				<li>
					<AccountCircleRoundedIcon className="icons"/>
					<a href="">Profile</a>
				</li>
				<li>
					<ExitToAppRoundedIcon className="icons"/>
					<a href="">Logout</a>
				</li>
			</ul>
		</div>
		<div className="bottom">
			<div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
			<div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
		</div>
	</div>	
)
}

export default Sidebar