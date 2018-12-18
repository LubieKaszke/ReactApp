import React from 'react';



function Table(props) {
    return(
        <ul>
            <p>{props.table.id +" "+props.table.zajety}</p>
            <button onClick={props.onPick(props.table.id)}>zamow</button>
        </ul>
    )
}

export default Table;