var initData = {};
const PlayerEditting = (state = initData,action) => {
	switch(action.type){
		case 'PLAYER_EDITTING':
			state = action.Player;
			return {...state};
		default:
			return {...state};
	}
}
export default PlayerEditting;