import {FETCH_QUOTE, FETCH_QUOTE_FAIL} from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_QUOTE:
            return [action.payload.data, ...state];
        case FETCH_QUOTE_FAIL:
            return state;
        default: 
            return state;
    }
}