import Players from './Players';
import {combineReducers} from 'redux';
import PlayerEditting from './PlayerEditting';
import Articles from './Articles';
import ArticleDetail from './ArticleDetail';
const AppReducer = combineReducers({
	Players,
	PlayerEditting,
	Articles,
	ArticleDetail
});
export default AppReducer;