import axios from 'axios';
import { getCurrentDate } from './date';
import { PROTECTED_KEY } from '../../config'; // Quandl API Key omitted for security reasons, visit the URL below to create your own.

const ROOT_URL = 'https://www.quandl.com/api/v3/datasets/WIKI/'; // stock quotes are pulled from: https://www.quandl.com/docs/api#introduction

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTE_FAIL = 'FETCH_QUOTE_FAIL';

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

const localConfig;

export function fetchQuote(term){
    const url = `${ROOT_URL}${term}.json?api_key=${PROTECTED_KEY}`;

    const request = axios.get(url)
        .then( response => {
            if(response.length === 0) {
            return;
            } else { 
                const name = response[0].dataset.name.split(' (')[0];            
                const symbol = response[0].dataset.dataset_code;
                const date = response[0].dataset.data[0][responseColumns.date];
                const rawData = response[0].dataset.data;
                var parsedData = [];
    
                for(var i = rawData.length - 1; i > 0; i--){
                    var newDate = new Date(rawData[i][responseColumns.date]).getTime();
                    var dataObj = [
                        newDate,
                        rawData[i][responseColumns.close]
                    ];
                    parsedData.push(dataObj);
                }

                localConfig = {
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
            }
        })
        .catch(error => {
            return {
                type: FETCH_QUOTE_FAIL,
                payload: error
            };
        })

    return {
        type: FETCH_QUOTE,
        payload: localConfig
    };
}