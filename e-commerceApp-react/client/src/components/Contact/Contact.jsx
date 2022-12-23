import "./contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
	<div className="contact-container">
		<span>BE IN TOUCH WITH US:</span>
		<div className="join">
			<input type="text" placeholder="Enter your e-mail" />
			<button>JOIN US</button>
		</div>
		<div className="socials">
			<FacebookIcon className="icon"/>
			<InstagramIcon className="icon"/>
			<TwitterIcon className="icon"/>
			<GoogleIcon className="icon"/>
			<PinterestIcon className="icon"/>
		</div>
	</div>
  )
}

export default Contact