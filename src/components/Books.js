import React, { Component } from 'react'
import BooksCtrl from './BooksCtrl'

export class Books extends Component {
    constructor() {
        super()
        
        this.state = {
            title: '',
            author: '',
            genre: '',
            pages: '',
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 40,
            marginLeft: "20%",
            marginRight: "20%"
          }}>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='author'
            placeholder='Author'
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='genre'
            placeholder='Genre'
            value={this.state.genre}
            onChange={this.handleChange}
          />
          <input
            type='number'
            name='pages'
            placeholder='Pages'
            value={this.state.pages}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='imageUrl'
            placeholder='Image URL'
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <button className='createButton' onClick={this.handleClick}>
            Create Book
          </button>
        </div>
        {this.props.books.map(book => {
          return (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center"
              }}>
              <BooksCtrl
                key={book.id}
                book={book}
                updateBook={this.props.updateBook}
                deleteBook={this.props.deleteBook}
              />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Books

