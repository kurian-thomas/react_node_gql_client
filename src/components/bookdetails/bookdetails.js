import React, { Component } from 'react';
//import { graphql } from 'react-apollo';
import { getBookQuery, getAuthorsQuery } from '../quries/quries';
import { Query } from 'react-apollo';

class BookDetails extends Component {

    render() {
        console.log(this.props.bookid);
        return (
            <Query query={getAuthorsQuery} >

                {
                    ({ loading, error, data }) => {
                        if (loading) return <p>Loading</p>
                        if (error) return <p>Something went wrong</p>
                        console.log(data)
                        //console.log(typeof (this.props.bookid))
                        return (
                            <div>
                                <h2></h2>
                            </div>
                        )
                    }
                }

            </Query>
        )

    }
}

export default BookDetails;