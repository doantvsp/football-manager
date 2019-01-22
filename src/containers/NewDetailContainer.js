import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getNewInfoByIdRequest} from './../actions/index';
import NewDetail from './../components/NewDetail';

class NewDetailContainer extends Component {

  componentWillMount(){
    var {match} = this.props;
    var id = match.params.id;
    this.props.getNewInfoById(id);
  }
  render() {
    var {NewInfo} = this.props;
    return (
      <NewDetail NewInfo = {NewInfo} />
    );
  }
}
const mapStateToProps = state => {
  return {
    NewInfo: state.ArticleDetail
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getNewInfoById: (id) => {
      dispatch(getNewInfoByIdRequest(id));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewDetailContainer);
