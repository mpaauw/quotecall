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
    renderQuoteDisplay(configData){
        return (       
            <div>
                <HighStock config={configData}/>
            </div>    
        );      
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