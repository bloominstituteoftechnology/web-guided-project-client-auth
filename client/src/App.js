import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';
import axios from 'axios';

function App() {
  const logout = () => {
    //let the server know the user is logged out
    //remove token from localStorage
    //redirect
    axios.post("http://localhost:5001/api/logout", { userToken: localStorage.getItem("token")})
        .then(res => {
          console.log("we have logged out!")
          localStorage.removeItem("token");
          window.location.href = "/login";
        })
        .catch(err => console.log(err))

  }
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/protected" component={GasPrices} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
