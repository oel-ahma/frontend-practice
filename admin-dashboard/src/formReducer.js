import { PlaylistAddOutlined } from "@mui/icons-material";

export const INITIAL_STATE = {
	title: "",
	desc: "",
	price: 0,
	category: "",
	tags: [],
	images: {
		sm: "",
		md: "",
		lg: "",
	},
	quantity: 0,
};

export const formReducer = (state, action) => {
	switch(action.type) {
		case "CHANGE_INPUT" : 
		return {
			...state,
			[action.payload.name]: action.payload.value,
		}
		case "CHANGE_TAG" :
		return {
			...state,
			tags: action.payload.value
		}
		case "REMOVE_TAG" : 
		return {
			...state,
			tags: state.tags.filter(tag => tag != action.payload.value)
		}
		case "INCREASE":
		return {
			...state,
			quantity: action.payload.value
		}
		case "DECREASE":
		return {
			...state,
			quantity: action.payload.value
		}
		default:
			return state;
	}
}