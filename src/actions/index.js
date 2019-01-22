import callApi from './../untils/ApiCaller';

export const getListPlayersRequest = () => {
	return (dispatch) => {
		return callApi('players').then(res => {
			dispatch(getListPlayers(res.data));
		});
	}
}

export const getListPlayers = (Players) => {
	return {
		type: 'GET_ALL_PLAYERS',
		Players
	}
}

export const addPlayerRequest = (Player) => {
	return (dispatch) => {
		return callApi('players','POST',Player).then(res => {
			dispatch(addPlayer(res.data));
		});
	}
}

export const addPlayer = (Player) => {
	return {
		type: 'ADD_PLAYER',
		Player
	}
}

export const deletePlayerRequest = (id) => {
	return (dispatch) => {
		return callApi(`players/${id}`,'DELETE').then(res => {
			dispatch(deletePlayer(res.data.id));
		});
	}
}

export const deletePlayer = (id) => {
	return {
		type: 'DELETE_PLAYER',
		id
	}
}

export const getPlayerByIdRequest = (id) => {
	return (dispatch) => {
		return callApi(`players/${id}`,'GET').then(res => {
			dispatch(getPlayerById(res.data));
		});
	}
}

export const getPlayerById = (Player) => {
	return {
		type: 'PLAYER_EDITTING',
		Player
	}
}

export const udaptePlayerRequest = (Player) => {
	return (dispatch) => {
		return callApi(`players/${Player.id}`,'PUT',Player).then(res => {
			dispatch(udaptePlayer(res.data));
		});
	}
}

export const udaptePlayer = (Player) => {
	return {
		type: 'UPDATE_PLAYER',
		Player
	}
}

export const getListArticleRequest = () => {
	return (dispatch) => {
		return callApi('articles').then(res => {
			dispatch(getListArticle(res.data));
		});
	}
}

export const getListArticle = (Articles) => {
	return {
		type: 'GET_ALL_ARTICLE',
		Articles
	}
}

export const getNewInfoByIdRequest = (id) => {
	return (dispatch) => {
		return callApi(`articles/${id}`).then(res => {
			dispatch(getNewInfoById(res.data));
		});
	}
}

export const getNewInfoById = (Article) => {
	return {
		type: 'GET_ARTICLE_BY_ID',
		Article
	}
}