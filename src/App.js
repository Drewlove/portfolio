import React from 'react';
import {Route} from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Home from './Home'
import Project from './Project'
import Stack from './Skills/Stack'
import './index.css';

function App() {
  return (
    <>
    <Nav />
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/skills' component={Stack}/>
    <Route path='/projects' component={Project}/>
    </>
  );
}

export default App;
