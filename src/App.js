import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/About/About';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return(
    <div>
   <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:id">
         <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
