import React, { Component } from 'react';
import {Link } from "react-router-dom";

class New extends Component {
  render() {
    var {article} = this.props;
    return (      
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <Link to={`/new/${article.id}`} className="btn btn-default">
          <img src={article.image} className="img-responsive" alt="Image"/>
        </Link>
        
        <article>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </article>

      </div>
    );
  }
}

export default New;
