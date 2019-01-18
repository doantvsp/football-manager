import Players from './Players';
import {combineReducers} from 'redux';
import PlayerEditting from './PlayerEditting';
import Articles from './Articles';
const AppReducer = combineReducers({
	Players,
	PlayerEditting,
	Articles
});
export default AppReducer;