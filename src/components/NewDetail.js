import React, { Component } from 'react';

class NewDetail extends Component {
  render() {
  	var {NewInfo} = this.props;
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <img src={NewInfo.image} className="img-responsive" alt="Image"/>
        
        <article>
          <h1>{NewInfo.title}</h1>
          <p>{NewInfo.content}</p>
        </article>

      </div>
    );
  }
}

export default NewDetail;
