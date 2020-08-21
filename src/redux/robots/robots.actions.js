import { robotsActionTypes } from './robots.types';

export const requestRobots = () => dispatch => {
	dispatch({ type: robotsActionTypes.GET_ROBOTS_PENDING });
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data =>
			dispatch({ type: robotsActionTypes.GET_ROBOTS_SUCCESS, payload: data })
		)
		.catch(error =>
			dispatch({ type: robotsActionTypes.GET_ROBOTS_FAILED, payload: error })
		);
};
