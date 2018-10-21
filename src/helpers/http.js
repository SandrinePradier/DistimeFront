import axios from 'axios';

let http = axios.create({
	// baseURL: 'http://localhost:2707',
	baseURL: 'https://distimegps.herokuapp.com',
})

http.interceptors.response.use(res => {
	console.log("Response Interceptor", res);
	return res;
});

export default http;