import React, { Component } from 'react';

class AddPlayer extends Component {
	constructor(props){
		super(props);
		this.state={
			id: '',
			name:'',
			age:'',
			club: ''
		}
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name] : value
		});
	}

	componentDidMount (){
		var {match} = this.props;
		if(match.params.id){
			this.props.getPlayerById(match.params.id);
		}
		else{
			console.log('addd');
		}
	}
	componentWillReceiveProps (newProps){
		var {PlayerEditting} = newProps;
		this.setState(PlayerEditting);
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	}

	render() {
		var {name,age,club} = this.state;
	    return (     
	    	<div className="row">
	    	 	<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
	    	 		<form onSubmit={this.onSubmit}>
				      	<legend>Form Add Player</legend>
				      
				      	<div className="form-group">
				      		<label>Name</label>
				      		<input type="text" className="form-control" name='name' onChange={this.onChange} value={name}/>
				      		<label>Age</label>
				      		<input type="text" className="form-control" name='age' onChange={this.onChange} value={age}/>
				      		<label>Club</label>
				      		<input type="text" className="form-control" name='club' onChange={this.onChange} value={club}/>
				      	</div>
				      
				      	
				      	<button type="submit" className="btn btn-primary">Submit</button>&nbsp;
				      	<button type="button" className="btn btn-primary">Cancel</button>
				      </form>
	    	 	</div>
	    	 </div> 
	      
	    );
	}
	
}

export default AddPlayer;
