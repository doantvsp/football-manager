import React, { Component } from 'react';
import Players from './../components/Players';
import {connect} from 'react-redux';
import {getListPlayersRequest,deletePlayerRequest} from './../actions/index';
import Player from './../components/Player';

class PlayersContainer extends Component {

  componentDidMount(){
    this.props.getAllPlayers();
  }
  render() {
    var {listPlayers} = this.props;
    return (      
      <Players>{this.showPlayers(listPlayers)}</Players>
    );
  }
  showPlayers = (Players) => {
    
    var result = null;
    if(Players.length > 0){
      result = Players.map((player,index) => {
        return (
            <Player key={index} player={player} index={index+1} onDeletePlayer={this.onDeletePlayer}/>
        );
      });
    }
    return result;
  }
  onDeletePlayer = (id) => {
    var {deletePlayer} = this.props;
    deletePlayer(id);
  }
}
const mapStateToProps = state => {
  return {
    listPlayers: state.Players
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllPlayers: () => {
      dispatch(getListPlayersRequest());
    },
    deletePlayer: (id) => {
      dispatch(deletePlayerRequest(id));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PlayersContainer);
