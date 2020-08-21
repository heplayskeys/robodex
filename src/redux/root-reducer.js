import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import getRobotsReducer from './robots/robots.reducer';

const rootReducer = combineReducers({
	search: searchReducer,
	getRobots: getRobotsReducer
});

export default rootReducer;
