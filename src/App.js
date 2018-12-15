import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Routers from './Routers';
import Menus from './components/Menus';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Menus />
          {this.showContent(Routers)}
        </div>

      </Router>
      
      
    );
  }
  showContent = (Routers) => {
    var result = null;
    if(Routers.length > 0){
      result = Routers.map((router,index) => {
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
