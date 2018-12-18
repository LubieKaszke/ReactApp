import React from 'react';
import axios from 'axios';
import data from '../data/meals.json';

export default class MealList extends React.Component{
    state ={
        meals: []
    };

   

    componentDidMount(){
        console.log("dupa");
        axios.get(data).then(res =>{
        console.log(res);    
        this.setState({meals: res.data});
        });
    }


    render(){
        return( <ul>
                {this.state.meals.map(meal => <li><p>{meal.nazwa}</p>{meal.opis}</li>)}
            </ul>)
    }
    
} 

