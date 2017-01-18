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
        }else if(quoteData[0].hasOwnProperty("quandl_error")){
            return (
                <div>
                    <p>You have tried searching a ticker that does not exist, please search a valid ticker!</p>
                </div>
            );
        } else { 
            const name = quoteData[0].dataset.name.split(' (')[0];            
            const symbol = quoteData[0].dataset.dataset_code;
            const date = quoteData[0].dataset.data[0][responseColumns.date];
            const rawData = quoteData[0].dataset.data;
            var parsedData = [];
 
            for(var i = rawData.length - 1; i > 0; i--){
                var newDate = new Date(rawData[i][responseColumns.date]).getTime();
                var dataObj = [
                    newDate,
                    rawData[i][responseColumns.close]
                ];
                parsedData.push(dataObj);
            }

            const localConfig = {
                xAxis: {
                    minRange: 1
                },
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
                }],
                rangeSelector: {
                    selected: 5
                }
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