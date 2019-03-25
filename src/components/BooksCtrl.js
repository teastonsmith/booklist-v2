import React, { Component } from 'react'

export class BooksCtrl extends Component {
    constructor(props) {
        super()

        this.state = {
            id: props.book.id,
            title: props.book.title,
            author: props.book.author,
            genre: props.book.genre,
            pages: props.book.pages,
            imageUrl: props.book.imageUrl,
            edit: false
        };
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleEditClick = () => {
        this.setState({
            edit: true
        })
    }

    handleUpdateClick = () => {
        this.props.updateBook(this.state)
        this.setState({
            edit: false
        })
    }

    handleDeleteClick = () => {
        this.props.deleteBook(this.state.id)
        this.setState({
            edit: false
        })
    }

    render() {
        return this.state.edit ? (
          <div>
            <header>Edit your book:</header>
            <div>
              <input
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
              <input
                type='text'
                name='author'
                value={this.state.author}
                onChange={this.handleChange}
              />
              <input
                type='text'
                name='genre'
                value={this.state.genre}
                onChange={this.handleChange}
              />
              <input
                type='number'
                name='pages'
                value={this.state.pages}
                onChange={this.handleChange}
              />
              <input
                type='text'
                name='imageUrl'
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
            </div>

            <button className='button' onClick={this.handleUpdateClick}>
              Update Info
            </button>
            <button className='button' onClick={this.handleDeleteClick}>
              Delete
            </button>
          </div>
        ) : (
          <div>
            <img src={this.state.imageUrl} alt='' width='150' />
            <p>{this.state.title}</p>
            <p>{this.state.author}</p>
            <p>{this.state.genre}</p>
            <p>{this.state.pages}</p>
              <button className='button'onClick={this.handleEditClick}>Edit</button>
          </div>
        );
    }
}

export default BooksCtrl
