import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>quotecall</h1>
        <SearchBar />
      </div>
    );
  }
}