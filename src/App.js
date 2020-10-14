import React from "react";
import "./App.css";
import { Route } from 'react-router-dom';


import Users from "./components/Users";
// import Albums from "./components/Albums";


function App() {
  return (
    <div>
      <Route path="/" component={Users} />
      {/* <Route path="/albums" render={() => <Albums />} /> */}
    </div>
  );
}

export default App;
