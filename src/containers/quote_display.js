import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import HighStock from 'react-highcharts/ReactHighstock.src';
 
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
        if(quoteData.length === 0) {
            return;
        } else { 
            const name = quoteData[0].dataset.name.split(' (')[0];            
            const symbol = quoteData[0].dataset.dataset_code;
            const date = quoteData[0].dataset.data[0][responseColumns.date];
            const rawData = quoteData[0].dataset.data;
            var parsedData = [];
 
            for(var i = 0; i < rawData.length; i++){
                var dataObj = [
                    rawData[i][responseColumns.date],
                    rawData[i][responseColumns.close]
                ];
                parsedData.push(dataObj);
            }
       
            const localConfig = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: name
                },
                series: [{
                    name: symbol,
                    data: parsedData,                
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            }
 
            return (       
                <div>
                    <HighStock config={localConfig}/>
                </div>    
            );
        }
    }
 
    render(){
        return(
            <div>
                {this.renderQuoteDisplay(this.props.quote)}
            </div>
        );
    }
}
 
function mapStateToProps({quote}){
    return {quote};
}
 
export default connect(mapStateToProps)(QuoteDisplay);