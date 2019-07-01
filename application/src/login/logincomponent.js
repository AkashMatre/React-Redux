import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
class logincomponent extends Component{

login = () => {
    this.props.login('satish'); 
    return <Redirect to="/testComponent" />;
}

render()
{
    return(
        <div>
            <h1>THis is login component</h1>
            <p> {this.props.username} </p>
            <button onClick={this.login}>click here</button>
        </div>
        
    )
}

}

const mapStateToProps = (state) => ({
    username: state.name
});
const mapDispatchToProps = dispatch => {   
    return {
        login: (value) => dispatch({ type: 'login',payload : value })      
    }
}




export default  connect(mapStateToProps,mapDispatchToProps)(logincomponent);