import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import QuoteDisplay from '../containers/quote_display';
import HighStock from 'react-highcharts/ReactHighstock.src';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>quotecall</h1>
        <SearchBar />
        <QuoteDisplay />
      </div>
    );
  }
}