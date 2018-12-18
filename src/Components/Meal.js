import React, {Component} from 'react';

const Message = props => <div>{props.msg}</div>;

export default class Meal extends Component{
    render(){
        return(
            <div>
                <Message msg="kot"/>
            </div>
        );
    }
}