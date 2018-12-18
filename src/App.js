import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Meal from './Components/Meal';
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
              <Link to ="/add">Tables</Link>
            </li>
            <li>
              <Link to ="/edit">Confirm reservation</Link>
            </li>
            <li>
              <Link to ="/edit">Orders</Link>
            </li>
          </ul>
          <h1>Menu options</h1>
        </header>
        <Meal></Meal>
      </div>
      </Router>
    );
  }
}

export default App;
