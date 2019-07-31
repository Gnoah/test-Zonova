import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { MDBNavbarBrand } from "mdbreact";
import Book from './Components/book';
import Home from './Components/home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store.js';


  class App extends Component {
   
    render(){
      return (
        <Provider store={store}>
        <div>
          <Router>
            <nav id="navbar" class=" navbar navbar-expand-lg navbar-light bg-light" scrolling>
                <MDBNavbarBrand>
                    <h1 id="book">Book</h1>
                </MDBNavbarBrand>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link to="/"><span id="couleur" >Home</span></Link> <span class="sr-only">(current)</span>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="">
                <Book />
            </div>
            
                <Route path="/"  exact component={ Home } />
                
                <div id="bat">
                </div>
              </Router>
              
            </div>
          </Provider>
    
      );
    }
  
}


export default App;
