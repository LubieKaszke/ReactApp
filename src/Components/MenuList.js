import React from 'react';
import axios from 'axios';
import Meal from './Meal';

export default class MealList extends React.Component{
    state ={
        meals: []
    };

   

    componentDidMount(){
        axios.get("meals.json").then(res =>{
        console.log(res);    
        this.setState({meals: res.data});
        });
    }


    render(){
        let mappedMeals = this.state.meals.map((meal)=>{
            return <Meal opis={meal.opis} nazwa={meal.nazwa} cena={meal.cena}></Meal> 
        })
        return mappedMeals;
    }
    
} 

