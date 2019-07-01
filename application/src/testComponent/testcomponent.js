
import React, { Component } from 'react';
import {connect} from 'react-redux';


class testComponent extends Component {

 render () {
     return (
        <h1> {this.props.username} </h1>
     )
 }

}

const mapStateToProps = (state) => {
    username = state.name
};

export default connect(mapStateToProps)(testComponent);