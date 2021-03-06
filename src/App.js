import React, { Component } from 'react'
import './App.css';
import MovieList from './MovieList'
import Nav from './Nav'
import AddMovie from './AddMovie'
import {MovieProvider} from './MovieContext'

class App extends Component {

  render() {
    return (
      <MovieProvider>
        <div className='App'>
            <AddMovie/>    
            <Nav/>
            <MovieList/>    
        </div>
      </MovieProvider>  
    );
  }
}

export default App;

// Nav and MovieList share data but are not connected via parent - child 