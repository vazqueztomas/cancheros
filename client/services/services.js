import axios from 'axios';

const OPTIONS = {
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
};

export function setupServices() {
	const devUriBase = "http://localhost:8080";
	const prodUriBase = "https://vaquita-escolar.herokuapp.com";
	const railwayUriBase = "https://vaquitaescolar.up.railway.app";
	let getBaseUri = () => (window.location.host.includes("localhost") || (window.location.host.includes('127.0.0.1'))) ? devUriBase : prodUriBase;
	axios.interceptors.request.use((req) => {
		return { ...req, url: getBaseUri() + req.url };
	}, null, { synchronous: true });
}

export const userLogin = async (userInfo) => {
	const response = await axios.post('/auth/login', userInfo, OPTIONS);
	return response;
};

export const userSignUp = async (userData) => {
	const response = await axios.post('/auth/signup', userData, OPTIONS);
	return response.data;
}