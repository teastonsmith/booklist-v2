import React, { Component } from 'react';
import BooksWrapper from './components/BooksWrapper'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BooksWrapper />
        <Footer />
  
      </div>
    );
  }
}

export default App;
