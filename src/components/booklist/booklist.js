import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../quries/quries';

//compoenets
import BookDetails from '../bookdetails/bookdetails';

class Booklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks() {
        var data = this.props.data;

        if (data.loading) {
            return (<div>Loading Books</div>)
        }
        else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={(e) => { this.setState({ selected: book.id }) }}>{book.name}</li>
                )
            })
        }
    }
    render() {

        return (
            <div className="booklist-component">
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookid={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(Booklist);
