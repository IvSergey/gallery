import React from "react";
import "./App.css";
import { Route, withRouter } from 'react-router-dom';



import Users from "./components/Users";
import User from "./components/User";
import Album from "./components/Album";


function App() {
  return (
    <div>
      <Route exact path='/' component={Users} />
      <Route exact path='/user/:id' component={User}></Route>
      <Route exact path='/user/:id/album/:id' component={Album}></Route>
    </div>
  );
}

export default withRouter(App)
