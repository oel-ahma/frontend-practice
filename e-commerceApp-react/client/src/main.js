
const axiosRequest = require('axios');

const fct = async () => {
	let res = await axiosRequest.get("https://www.boredapi.com/api/activity");
	console.log(res.data.activity);
}
fct();

const res = axiosRequest.get("https://www.boredapi.com/api/activity")
	.then((res) =>
		console.log(res.data.activity)
	)
	.catch((err) =>
		console.error(err)
	)

