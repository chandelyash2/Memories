import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,Route
  
} from "react-router-dom";
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import LandingPage from './pages/landing'
import ProtectedRoute  from './components/Protecte.Route';
function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
    <Route exact path='/' component={LandingPage}/>

      <Route exact path='/signup'component={SignUp}/>
     
      <Route exact path='/login' component={Login}/>
      
      <ProtectedRoute exact path='/homepage' component={Homepage}/>
       

    </Switch>
  </Router>
    </div>
  );
}

export default App;
