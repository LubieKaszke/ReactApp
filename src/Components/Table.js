import React from 'react';



function Table(props) {
    return(
        <div>
            <p>{props.table.id +" "+props.table.zajety}</p>
            <button onClick={props.onPick(props.table.id)}>zamow</button>
            </div>
    )
}

export default Table;