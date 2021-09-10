import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePsap from './components/CreatePsap';
import ShowPsapList from './components/ShowPsapList';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowPsapList} />
          <Route path='/redirect/create-psap' component={CreatePsap} />
        </div>
      </Router>
    );
  }
}
  


export default App;