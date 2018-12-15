import React from 'react';
import Home from './components/Home';
import PlayersContainer from './containers/PlayersContainer';
import AddPlayerContainer from './containers/AddPlayerContainer';

const Routers = [
	{
		path: '/',
		exact: true,
		main: () => <Home />
	},
	{
		path: '/players',
		exact: false,
		main: () => <PlayersContainer/>
	},
	{
		path: '/player/add',
		exact: true,
		main: ({history}) => <AddPlayerContainer history={history} />
	}
];
export default Routers;