import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Players extends Component {
  render() {
    return (      
      <div className="row">
      	<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
      		<Link to='/player/add' className="btn btn-primary">Add Player</Link>
      		<table className="table table-hover table-bordered">
      			<thead>
      				<tr>
      					<th>No</th>
      					<th>Name</th>
      					<th>Age</th>
      					<th>Club</th>
      					<th>Actions</th>
      				</tr>
      			</thead>
      			<tbody>
      				{this.props.children}
      			</tbody>
      		</table>
      		
      	</div>
      </div>
    );
  }
}

export default Players;
