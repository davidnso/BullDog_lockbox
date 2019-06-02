import React from 'react';
import LoginComponent from './Login/Login'
import HomeComponent from './Home/home';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path='/login' component={LoginComponent}></Route>
        <Route path='/home' component={HomeComponent}></Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
