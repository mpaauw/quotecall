import axios from 'axios';
import { getCurrentDate } from './date';
import { PROTECTED_KEY } from '../../config'; // Quandl API Key omitted for security reasons, visit the URL below to create your own.

const ROOT_URL = 'https://www.quandl.com/api/v3/datasets/WIKI/'; // stock quotes are pulled from: https://www.quandl.com/docs/api#introduction

export const FETCH_QUOTE = 'FETCH_QUOTE';

export function fetchQuote(term){

    var frontDate = getCurrentDate(0); // today
    var backDate = getCurrentDate(1); // pull all stock data up to a year back

    const url = `${ROOT_URL}${term}.json?start_date=${backDate}&end_date=${frontDate}&api_key=${PROTECTED_KEY}`;

    const request = axios.get(url);

    return {
        type: FETCH_QUOTE,
        payload: request
    };
}