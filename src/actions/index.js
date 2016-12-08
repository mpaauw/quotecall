import axios from 'axios';

const API_KEY = getAPIKey(); // Quandl API Key omitted for security reasons, visit the URL below to create your own.
const ROOT_URL = `https://www.quandl.com/api/v3/datasets/WIKI/`; // stock quotes are pulled from: https://www.quandl.com/docs/api#introduction

export const FETCH_QUOTE = 'FETCH_QUOTE';

function getAPIKey(){
    var fs, config;
    config = 'config.json';
    fs = require('fs');

    var readFile = JSON.parse(fs.readFileSync(config));

    return readFile.key;
}

export function fetchQuote(term){

    const url = `${term}.json?api_key=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_QUOTE,
        payload: request
    };
}