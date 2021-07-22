import Axios from 'axios';
import {
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNOUT
} from '../constants/userConstant';

export const register = (name, email, password) => async (dispatche) => {
	dispatche({ type: USER_REGISTER_REQUEST, payload: { email, password } });
	try {
		const { data } = await Axios.post('/api/users/register', { name, email, password });
		dispatche({ type: USER_REGISTER_SUCCESS, payload: data });
		dispatche({ type: USER_SIGNIN_SUCCESS, payload: data });
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatche({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const signin = (email, password) => async (dispatche) => {
	dispatche({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
	try {
		const { data } = await Axios.post('/api/users/signin', { email, password });
		dispatche({ type: USER_SIGNIN_SUCCESS, payload: data });
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatche({
			type: USER_SIGNIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const signout = () => (dispatche) => {
	localStorage.removeItem('userInfo');
	localStorage.removeItem('cartItems');
	//localStorage.removeItem('shippingAddress');
	dispatche({ type: USER_SIGNOUT });
	document.location.href = '/signin';
};
