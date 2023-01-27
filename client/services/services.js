import axios from 'axios';

const OPTIONS = {
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
};

export const userLogin = async (userInfo) => {
	const response = await axios.post('/auth/login', userInfo, OPTIONS);
	return response.data;
};