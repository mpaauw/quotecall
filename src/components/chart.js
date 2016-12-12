import React from 'react';
import highstock from 'highcharts';

export default (props) => {
    return (
        <div>
            <highstock data={props.data}>
            </highstock>
        </div>
    );
}