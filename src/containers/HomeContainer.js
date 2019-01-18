import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getListArticleRequest} from './../actions/index';
import Home from './../components/Home';
import New from './../components/New';

class HomeContainer extends Component {

  componentDidMount(){
    this.props.getListArticle();
  }
  render() {
    var {articles} = this.props;
    return (
      <Home>{this.showArticles(articles)}</Home>
    );
  }

  showArticles = (articles) => {
    var result = null;
    if(articles.length > 0){
      result = articles.map((article,index) => {
        return (
            <New key={index} article={article} index={index+1} />
        );
      });
    }
    return result;
  }
}
const mapStateToProps = state => {
  return {
    articles: state.Articles
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getListArticle: () => {
      dispatch(getListArticleRequest());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
