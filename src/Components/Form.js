import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    render(){
        if(!this.props.label){
            return( <h1>nie podałeś label</h1>)
        }
        return(
            <form>
               {this.props.label} <input type={this.props.type} value={this.props.value} id={this.props.id}></input>
            </form>
        )
    }
};
 
Form.defaultProps ={
    type:"text",
};
 
Form.propTypes ={
    label: PropTypes.string.isRequired,
};