import React, { useReducer, useRef } from "react";
import { INITIAL_STATE, formReducer } from "./formReducer";
import { SatelliteAlt } from "@mui/icons-material";

const Form = () => {
	const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
	const tagRef = useRef();

	const handleChange = (e) => {
		dispatch({
			type: "CHANGE_INPUT", 
			payload: { name: e.target.className, value: e.target.value }
		});
	}

	const handleTag = (e) => {
		e.preventDefault();
		console.log(tagRef.current.value);
		dispatch({
			type: "CHANGE_TAG",
			payload: {value: tagRef.current.value.split(',') }
		})
	}
	console.log(state);
	return (
		<div className="form" style={{marginTop: "50px"}}>
			<form style={{display: "flex", flexDirection: "column", width: "400px", gap: "15px", alignItems: "center"}}>
				<input
				  type="text"
				  className="title"
				  placeholder="Title"
				  onChange={handleChange}
				  name="title"
				/>
				<input
				  type="text"
				  className="desc"
				  placeholder="Description" 
				  onChange={handleChange}
				/>
				<input
				  type="text"
				  className="price"
				  placeholder="Price"
				  onChange={handleChange}
				/>
				<p>Category:</p>
				<select className="category" id="" onChange={handleChange}>
					<option>Apple</option>
					<option>PineApple</option>
					<option>Orange</option>
				</select>
				<p>Tags:</p>
				<textarea ref={tagRef} name="" id="" cols="30" rows="10"></textarea>
				<button
				  onClick={handleTag}>Add
				  Tags
				</button>
				<div className="tags" style={{display: "flex", gap: "5px", cursor: "pointer"}}>
					{state.tags.map((tag) => (
						<small key={tag} onClick={(e) => {console.log(tag); dispatch({ type: "REMOVE_TAG", payload: {value: tag}})}}>{tag}</small>
					))}
				</div>
				<div className="quantity" style={{display: "flex", gap: "10px"}}>
					<button
					onClick={(e) => { 
						e.preventDefault();
					  	dispatch({
							type: "DECREASE",
					  		payload: {value: state.quantity - 1},
					})}}>
						-
					</button>
					<p>Quantity ({state.quantity})</p>
					<button onClick={(e) => {e.preventDefault(); dispatch({ type: "INCREASE", payload: {value: state.quantity + 1}})}}>+</button>
				</div>
			</form>

		</div>
	);
}

export default Form;