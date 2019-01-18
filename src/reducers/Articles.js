var initData = [];
const Articles = (state = initData,action) => {
	switch(action.type){
		case 'GET_ALL_ARTICLE':
			state = action.Articles;
			return [...state];
		default:
			return [...state];
	}
}
export default Articles;