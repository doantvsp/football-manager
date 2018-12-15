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