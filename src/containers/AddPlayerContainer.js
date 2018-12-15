import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPlayerRequest} from './../actions/index';
import AddPlayer from './../components/AddPlayer';

class AddPlayerContainer extends Component {
  render() {
    return (      
      <AddPlayer onSubmit={this.onSubmit}/>
    );
  }
  onSubmit = (Player) => {
    var {history} = this.props;
    this.props.addPlayer(Player);
    history.goBack();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: (Player) => {
      dispatch(addPlayerRequest(Player));
    }
  }
}
export default connect(null,mapDispatchToProps)(AddPlayerContainer);
