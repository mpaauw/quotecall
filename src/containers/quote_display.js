import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

const responseColumns = {
    date: 0,
    open: 1,
    high: 2,
    low: 3,
    close: 4,
    volume: 5,
    ex_dividend: 6,
    split_ratio: 7,
    adj_open: 8,
    adj_high: 9,
    adj_low: 10,
    adj_close: 11,
    adj_volume: 12
};



class QuoteDisplay extends Component {
    renderQuoteDisplay(quoteData){

        const name = quoteData.dataset.name.split(' (')[0];
        const symbol = quoteData.dataset.dataset_code;
        const date = quoteData.dataset.data[0][responseColumns.date];
        const rawData = quoteData.dataset.data;

        var parsedData = [];

        for(var i = 0; i < rawData.length; i++){
            var dataObj = {
                date: rawData[i][responseColumns.date],
                price: rawData[i][responseColumns.close]
            };
            parsedData.push(dataObj);
        }

        // TEST DRIVER:
        for(var x = 0; x < parsedData.length; x++){
            console.log('date: [' + parsedData[x].date + ']');
            console.log('price: [' + parsedData[x].price + ']');
            console.log('--')
        }

        const config = {
            rangeSelector: {
                selected: 1
            },
            title: {
                text: {name}
            },
            series: [{
                name: {symbol},
                data: {parsedData},
                tooltip: {
                valueDecimals: 2
                }
            }]
        };

        return (
            <div>
                <h3>{name} ({symbol})</h3>
                <h4>{date}</h4>
            </div>        
            // <div>
            //     <Chart config={config}/>
            // </div>    
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
