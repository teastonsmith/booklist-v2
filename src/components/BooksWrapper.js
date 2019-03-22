import React, { Component } from 'react'
import axios from "axios";

import BooksCtrl from './BooksCtrl'
import Books from './Books'

import bg from './images/bg.png'


export class BooksWrapper extends Component {
    constructor() {
        super()
        
        this.state = {
            books: []
        }
  }
  
    render() {
    return (
      <div>
        
      </div>
    )
  }
}

function background() {
    return <img src={bg} alt="Background" />
}

export default BooksWrapper
