var initData = [];
var findIndex = (players,id) => {
	var index = -1;
	players.forEach((player,key)=>{
		if(player.id === id){
			index = key;
		}
	});

	return index;
}
const Players = (state = initData,action) => {
	switch(action.type){
		case 'GET_ALL_PLAYERS':
			state = action.Players;
			return [...state];
		case 'ADD_PLAYER':
			state.push(action.Player);
			return [...state];
		case 'DELETE_PLAYER':
			var index = findIndex(state,action.id);
			if(index !== -1){
				state.splice(index,1);
			}
			return [...state];
		case 'UPDATE_PLAYER':
		 	index = findIndex(state,action.Player.id);
			state[index] = action.Player;
			return [...state];
		default:
			return [...state];
	}
}
export default Players;