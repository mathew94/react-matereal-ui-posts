import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path = "/post/:pId">
          <PostDetail/>
        </Route>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
