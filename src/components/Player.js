import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
          <Link to={`/player/add/${player.id}`} className="btn btn-default">EDIT</Link>
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
