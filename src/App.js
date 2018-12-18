import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Meal from './Components/Meal';
import MenuList from './Components/MenuList';
import Form from './Components/Form';
import TableList from './Components/TableList';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <Link to ="/">Menu List</Link>
            </li>
            <li>
              <Link to ="/tables">Tables</Link>
            </li>
            <li>
              <Link to ="/confirm">Confirm reservation</Link>
            </li>
            <li>
              <Link to ="/orders">Orders</Link>
            </li>
          </ul>
          <Form label="gowno"></Form>
          <h1>Menu options</h1>
          <Route exact path="/" component={MenuList}></Route>
          <Route exact path="/tables" component={TableList}></Route>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
