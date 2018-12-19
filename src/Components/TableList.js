import React from 'react';
import axios from 'axios';
import Table from './Table';

export default class TableList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        };
        this.onPick = this.onPick.bind(this);
    }
    

    componentDidMount(){
        axios.get("tables.json").then(res =>{
        console.log(res);    
        this.setState({tables: res.data});
        });
    }

    onPick = (id) => (e) => {
        e.preventDefault();
        console.log(id);
    }
    

    render(){
        let tablesList = this.state.tables.map((table) => {
            return(
                <li key={table.id}>
                    <Table table={table} onPick={(id) => this.onPick(id)}/>
                </li>)
        })
        return (<ul>
            {tablesList}
            </ul>);
    }
    
} 
