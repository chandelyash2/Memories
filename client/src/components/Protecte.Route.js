import React from "react";
import { Redirect, Route } from "react-router-dom";
function ProtectedRoute({ component: Component, ...rest }) {
    const auth = localStorage.getItem('userlogin')
    // console.log(auth)
  return (
    <Route {...rest} render={props => (
        auth==='isloggedin' ?
            <Component {...props} />
        : <Redirect to="/" />
    )} />
  );
}

export default ProtectedRoute;