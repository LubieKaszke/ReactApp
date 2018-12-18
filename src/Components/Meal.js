import React from 'react';


function Meal(props){
        return(
            <div>
                <h4>{props.nazwa}</h4>
                <p>{props.cena}{props.opis}</p>
            </div>
        );
}

export default Meal;