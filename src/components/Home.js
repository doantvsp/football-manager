import React, { Component } from 'react';
import New from './New';
class Home extends Component {
  render() {
    return (      
      <div className="custom-container" >
      	<div className="row">
      		{this.props.children}
      	</div>
      </div>
    );
  }
}

export default Home;
