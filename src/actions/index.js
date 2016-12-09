import axios from 'axios';
import { getCurrentDate } from './date';
import { PROTECTED_KEY } from '../../config'; // Quandl API Key omitted for security reasons, visit the URL below to create your own.

const ROOT_URL = 'https://www.quandl.com/api/v3/datasets/WIKI/'; // stock quotes are pulled from: https://www.quandl.com/docs/api#introduction

export const FETCH_QUOTE = 'FETCH_QUOTE';

export function fetchQuote(term){

    var today = getCurrentDate(0);
    var yesterday = getCurrentDate(1);

    const url = `${ROOT_URL}${term}.json?start_date=${yesterday}&end_date=${today}&api_key=${PROTECTED_KEY}`;

    const request = axios.get(url);

    return {
        type: FETCH_QUOTE,
        payload: request
    };
}