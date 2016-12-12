import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class QuoteDisplay extends Component {
    renderQuoteDisplay(quoteData){

        //TEST DRIVER:
        console.log('quoteData:[' + quoteData + ']');


        const name = quoteData.dataset.name;
        const retrieved = quoteData.dataset.refreshed_at;

        //TEST DRIVERS:
        console.log('name: [' + name + ']');
        console.log('ret:  [' + retrieved + ']');

        return (
            <div>
                <h3>{name}</h3>
                <h4>{retrieved}</h4>
            </div>            
        );
    }

    render(quoteData){
        return(
            <div>
                {this.props.quote.map(this.renderQuoteDisplay)}
            </div>
        );
    }
}

function mapStateToProps({quote}){
    return {quote};
}

export default connect(mapStateToProps)(QuoteDisplay);

