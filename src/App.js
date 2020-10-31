import React from 'react';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Home/Footer/Footer';
import Contact from './Components/Home/Contact/Contact';
import About from './Components/Home/About/About';
import AllProjects from './Components/Home/Portfolio/AllProjects';
import Navbar from './Components/Home/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>       
        <Route path="/home" >
          <Home></Home>
        </Route>
        <Route path="/blog" >
          <Blog></Blog>
          <Footer></Footer>
        </Route>
        <Route path="/about" >
          <About></About>
        </Route>
        <Route path="/contact" >
          <Contact></Contact>
        </Route>
        <Route path="/allProjects" >
          <AllProjects></AllProjects>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};
 
export default App;