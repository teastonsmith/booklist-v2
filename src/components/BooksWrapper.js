import React, { Component } from 'react';
import axios from 'axios';

import Books from './Books';

export default class BooksWrapper extends Component {
	constructor() {
		super();

		this.state = {
			books: [],
		};
	}

	createBook = book => {
		axios
			.post('/api/index', book)
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err => {
				console.log('An error ocurred while creating the book', err);
			});
	};

	componentDidMount() {
		axios
			.get('/api/index')
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err => {
				console.log('An error ocurred while mounting the component', err);
			});
	}

	updateBook = book => {
		axios
			.put(`/api/index/${book.id}`, book)
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err =>
				console.log('An error ocurred while updating the book', err),
			);
	};

	deleteBook = id => {
		axios
			.delete(`/api/index/${id}`)
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err =>
				console.log('An error ocurred while deleting the book', err),
			);
	};

	render() {
		return (
			<div>
				<div>
					<Books
						books={this.state.books}
						handleCreateBook={this.createBook}
						updateBook={this.updateBook}
						deleteBook={this.deleteBook}
					/>
				</div>
			</div>
		);
	}
}
