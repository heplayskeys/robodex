import { SearchActionTypes } from './search.types';

const INITIAL_STATE = {
	text: ''
};

const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SearchActionTypes.CHANGE_SEARCH_FIELD:
			return {
				...state,
				text: action.payload
			};

		default:
			return state;
	}
};

export default searchReducer;
