import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route path='/signup'>
        <SignUp/>

      </Route>
      <Route path='/login'>
        <Login/>

      </Route>
      <Route path='/homepage'>
        <Homepage/>

      </Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
