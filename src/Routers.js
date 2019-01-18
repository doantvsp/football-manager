import React from 'react';
import HomeContainer from './containers/HomeContainer';
import PlayersContainer from './containers/PlayersContainer';
import AddPlayerContainer from './containers/AddPlayerContainer';

const Routers = [
	{
		path: '/',
		exact: true,
		main: () => <HomeContainer />
	},
	{
		path: '/players',
		exact: false,
		main: () => <PlayersContainer/>
	},
	{
		path: '/player/add/:id?',
		exact: false,
		main: ({history,match}) => <AddPlayerContainer history={history} match={match} />
	}
];
export default Routers;