import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './reset.css';
import './App.css'
import './Project.css'
import Home from './components/Home';
import Kahoot from './components/Kahoot';
import Ww from './components/WayfaringWorld.js';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/kwizz' component={Kahoot} />
        <Route path='/studio' component={Ww} />
      </Switch>
        </div>
    );
  }
}

export default App;
