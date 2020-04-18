import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import Home from '../home/Home';
import Contact from './../contact/Contact';
import Skills from './../skills/Skills';
import About from './../about/About';
import ProjectDetail from './../home/ProjectDetail';


export default function Layout(){


  return (
  <Router>
    <div className="Layout">
    <nav className="navBar">
        <div className="navLinks navLinks__left">
           <NavLink className="navLink navLink--home" to="/">  Home </NavLink>
           <NavLink className="navLink navLink--about" to="/about">  About  </NavLink>

        </div>

        <div className="navLogo">
          <Link to="/">
             <img src="https://res.cloudinary.com/dyic445sm/image/upload/v1587245217/Portfolio/logo-white_jhnaoe.png" alt="logo" />
          </Link>  
        </div>

        <div className="navLinks navLinks__right">
            <NavLink className="navLink navLink--skills" to="/skills"> Skills </NavLink>
            <NavLink className="navLink navLink--contact" to="/contact">  Contact </NavLink>

        </div>

    </nav>

    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={Skills} />
        <Route path="/project/:id" component={ProjectDetail} />

    </Switch>


    <footer>
        <i className="copy"> @Daniel Solheim </i>
    </footer>

    </div>
  </Router>

  );

}
