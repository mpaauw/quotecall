import React from 'react';
import HighStock from 'react-highcharts/ReactHighstock.src';

export default (props) => {
    return (
        <div>
            <highstock data={props.parsedData} config={props.config}>
            </highstock>
        </div>
    );
}