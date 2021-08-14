import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePsap from './components/CreatePsap';
import ShowPsapList from './components/ShowPsapList';
import SearchPsap from './components/SearchPsap';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowPsapList} />
          <Route path='/create-psap' component={CreatePsap} />
          <Route path="/search-psap" component={SearchPsap} />
        </div>
      </Router>
    );
  }
}
  


export default App;