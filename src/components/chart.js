import React from 'react';
import HighStock from 'react-highcharts/ReactHighstock.src';

export default (props) => {
    return (
        <div>
            <HighStock config={props.config}>
            </HighStock>
        </div>
    );
}