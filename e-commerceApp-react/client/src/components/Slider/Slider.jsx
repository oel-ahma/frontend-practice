import React from 'react'
import "./slider.scss"
import { useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const data = [
		"https://images.pexels.com/photos/14448229/pexels-photo-14448229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/13896800/pexels-photo-13896800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	]

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
	}

	const nextSlide = () => {
		setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
	}

	return (
	<div className='slider'>
		<div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
			<img src={data[0]} alt="" />
			<img src={data[1]} alt="" />
			<img src={data[2]} alt="" />
		</div>
		<div className="icons">
			<div className="icon" onClick={prevSlide}>
				<ArrowBackIosOutlinedIcon/>
			</div>
			<div className="icon" onClick={nextSlide}>
				<ArrowForwardIosOutlinedIcon/>
			</div>
		</div>
	</div>
  )
}

export default Slider