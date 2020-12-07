import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Routers from './Routers';
import Menus from './components/Menus';
import Echo from 'laravel-echo';

window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    authEndpoint: "/broadcasting/auth",
});
window.Echo.channel(`channelname`)
    .listen('.ReceiveMessage', function (e) {
        console.log(e);
    });



class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Menus/>
                    {this.showContent(Routers)}
                </div>

            </Router>


        );
    }

    showContent = (Routers) => {
        var result = null;
        if (Routers.length > 0) {
            result = Routers.map((router, index) => {
                return (
                    <Route
                        key={index}
                        exact={router.exact}
                        path={router.path}
                        component={router.main}
                    />
                )
            })
        }
        return result;
    }
}

export default App;
