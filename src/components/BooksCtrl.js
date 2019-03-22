import React, { Component } from 'react'

export class BooksCtrl extends Component {
    constructor(props) {
        super(props)

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
                <header>Enter your book</header>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                <input type="number" name="pages" value={this.state.pages} onChange={this.handleChange} />
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                <button onClick={this.handleUpdateClick}>update book info</button>
                <button onClick={this.handleDeleteClick}>delete book</button>
                <button onClick={this.handleEditClick}>edit book</button>
            </div>
        ) : (
                <div>
                    <img src={this.props.book.imageUrl} alt='' width='100' />
                    <p>{this.props.book.title}</p>
                    <p>{this.props.book.pages}</p>
                </div>
            )
    }
}

export default BooksCtrl
