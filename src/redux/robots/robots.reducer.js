import { robotsActionTypes } from './robots.types';

const INITIAL_STATE = {
	users: [],
	error: '',
	isPending: false
};

export const getRobotsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case robotsActionTypes.GET_ROBOTS_PENDING:
			return { ...state, isPending: true };

		case robotsActionTypes.GET_ROBOTS_SUCCESS:
			return {
				...state,
				users: action.payload,
				isPending: false
			};

		case robotsActionTypes.GET_ROBOTS_FAILED:
			return { ...state, error: action.payload, isPending: false };

		default:
			return state;
	}
};

export default getRobotsReducer;
