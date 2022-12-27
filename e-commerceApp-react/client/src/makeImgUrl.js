
export const makeImgUrl = (data) => {
		return process.env.REACT_APP_UPLOAD_URL + data?.attributes?.url
}

export const getCategoryImgUrl = (data, id) => {
	
	try {
		if (data) {
			const ret = data[0]?.attributes.categories.data.filter(item => item.id === id)[0].attributes.img.data;
			return (makeImgUrl(ret)) 
		}
	} catch (err) {
		console.log(err)
	}
}