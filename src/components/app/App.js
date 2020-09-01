import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import Booklist from '../booklist/booklist';
import AddBook from '../addbook/addbook';

//apollo client setup


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>

        <div className="App">
          <h1>Books</h1>
          <Booklist />
          <AddBook />
        </div>

      </ApolloProvider>
    );
  }
}

export default App;
