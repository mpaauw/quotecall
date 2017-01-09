import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import HighStock from 'react-highcharts/ReactHighstock.src';
 
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