import {FETCH_QUOTE} from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_QUOTE:
            return [action.payload.data, ...state];
    }
    return state;
}