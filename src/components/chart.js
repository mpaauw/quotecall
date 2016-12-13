import React from 'react';
import highstock from 'highcharts';

export default (props) => {
    return (
        <div>
            <highstock data={props.parsedData} config={props.config}>
            </highstock>
        </div>
    );
}