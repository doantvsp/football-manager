import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPlayerRequest,getPlayerByIdRequest,udaptePlayerRequest} from './../actions/index';
import AddPlayer from './../components/AddPlayer';

class AddPlayerContainer extends Component {
  render() {
    var {match} = this.props;
    return (      
      <AddPlayer 
        onSubmit={this.onSubmit} 
        match={match} 
        getPlayerById={this.props.getPlayerById}
        PlayerEditting={this.props.PlayerEditting}
      />
    );
  }

  onSubmit = (Player) => {
    var {history} = this.props;
    if(Player.id){
      // case edit
      this.props.updatePlayer(Player);
    }
    else{
      //case add new
      this.props.addPlayer(Player);
      
    }  
    history.goBack();  
  }
}

const mapStateToProps = state => {
  return {
    PlayerEditting: state.PlayerEditting
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addPlayer: (Player) => {
      dispatch(addPlayerRequest(Player));
    },
    getPlayerById: (id) => {
      dispatch(getPlayerByIdRequest(id));
    },
    updatePlayer: (Player) => {
      dispatch(udaptePlayerRequest(Player));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddPlayerContainer);
