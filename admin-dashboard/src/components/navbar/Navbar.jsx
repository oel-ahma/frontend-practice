import React, { useContext } from 'react'
import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);
  
	return (
	<div className="navbar">
		<div className="wrapper">
			<div className="search">
				<input type="text" placeholder='Search...' />
				<SearchRoundedIcon/>
			</div>
			<div className="items">
				<div className="item">
					<LanguageRoundedIcon className='icon'/>
					<span>
						English
					</span>
				</div>
				<div className="item" onClick={() => dispatch({type:"TOGGLE"})}>
					<DarkModeRoundedIcon className='icon'/>
				</div>
				<div className="item">
					<FullscreenExitRoundedIcon className='icon'/>
				</div>
				<div className="item">
					<NotificationsActiveRoundedIcon className='icon'/>
					<div className="counter">1</div>
				</div>
				<div className="item">
					<ChatRoundedIcon className='icon'/>
					<div className="counter">3</div>
				</div>
				<div className="item">
					<ViewListRoundedIcon className='icon'/>
				</div>
				<div className="item">
					<img 
						src="https://images.pexels.com/photos/13539518/pexels-photo-13539518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
						alt="profile" 
						className="avatar"
					/>
				</div>


			</div>
		</div>
	</div>
)
}

export default Navbar