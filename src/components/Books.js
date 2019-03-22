import React, { Component } from 'react'
import BooksCtrl from './BooksCtrl'

export class Books extends Component {
    constructor() {
        super()
        
        this.state = {
            title: '',
            author: '',
            genre: '',
            pages: 0,
            imageUrl: ''
        }
    }
    
    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let book = this.state

        this.props.handleCreateBook(book)
    }
  
    render() {
    return (
        <div>
            <h1>My book list</h1>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                < input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                <input type="number" name="pages" value={this.state.pages} onChange={this.handleChange} />
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                <button onClick={this.handleClick}>create book</button>
            </div>
            {this.props.books.map(book => {
                return <BooksCtrl
                    key={book.id} book={book}
                    updateBook={this.props.updateBook}
                    deleteBook={this.props.deleteBook} />
            })}
        </div>
    )
  }
}

export default Books

