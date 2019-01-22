var initData = {};
const ArticleDetail = (state = initData,action) => {
	switch(action.type){
		case 'GET_ARTICLE_BY_ID':
			state = action.Article;
			return {...state};
		default:
			return {...state};
	}
}
export default ArticleDetail;