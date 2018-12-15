import React, { Component } from 'react';

class Player extends Component {
  render() {
    var {player,index} = this.props;
    return (      
      <tr>
        <td>{index}</td>
        <td>{player.name}</td>
        <td>{player.age}</td>
        <td>{player.club}</td>
        <td>
          <button type="button" className="btn btn-default">EDIT</button>
          <button type="button" className="btn btn-default" onClick={()=>{this.onDeletePlayer(player.id)}}>DELETE</button>
        </td>
      </tr>
    );
  }
  onDeletePlayer = (id) => {
    this.props.onDeletePlayer(id);
  }
}

export default Player;
