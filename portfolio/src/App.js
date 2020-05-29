import React from 'react';
import {Route} from 'react-router-dom'
import Nav from './Nav'
import Project from './Project'
import Stack from './Skills/Stack'
import './index.css';

function App() {
  return (
    <>
    <Nav />
    <Route path='/skills' component={Stack}/>
    <Route path='/projects' component={Project}/>
    {/* <Stack />
    <Project /> */}
    </>
  );
}

export default App;
