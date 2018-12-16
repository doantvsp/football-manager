import Players from './Players';
import {combineReducers} from 'redux';
import PlayerEditting from './PlayerEditting';
const AppReducer = combineReducers({
	Players,
	PlayerEditting
});
export default AppReducer;