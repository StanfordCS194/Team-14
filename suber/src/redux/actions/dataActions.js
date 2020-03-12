import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, LOADING_USER } from '../types';
import axios from 'axios';

export const postTour = (tourData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	let touristContact = tourData.touristContact;
	axios
		.post('/tour', tourData)
		.then((res) => {
			dispatch({ type: CLEAR_ERRORS });
			history.push({
				pathname: '/confirmation',
				state: {touristContact: touristContact}
			});
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload: err
			});
		});
}