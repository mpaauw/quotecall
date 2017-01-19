import axios from 'axios';
import { getCurrentDate } from './date';
import { PROTECTED_KEY } from '../../config'; // Quandl API Key omitted for security reasons, visit the URL below to create your own.

const ROOT_URL = 'https://www.quandl.com/api/v3/datasets/WIKI/'; // stock quotes are pulled from: https://www.quandl.com/docs/api#introduction

export const FETCH_QUOTE = 'FETCH_QUOTE';

export function fetchQuote(term){
    const url = `${ROOT_URL}${term}.json?api_key=${PROTECTED_KEY}`;
    
    const request = axios.get(url);

    // test drivers:
    alert("request:[" + request.status + "]");
    alert("concat: [" + request.status / 10 + "]");

    if(request.status / 10 === 40 || request.status / 10 === 50){
        alert("Please search a valid quote!");
        return;
    }

    return {
        type: FETCH_QUOTE,
        payload: request
    };
}