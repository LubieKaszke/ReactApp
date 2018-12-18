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

    onPick(table) {
        // event.preventDefault();
    }

    render(){
        let tablesList = this.state.tables.map((table) => {
            return <Table table={table} onPick={(one) => this.onPick(one)}/>
        })
        return tablesList;
    }
    
} 
