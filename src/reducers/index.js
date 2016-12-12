import { combineReducers } from 'redux';
import QuoteReducer from './reducer_quote';

const rootReducer = combineReducers({
  quote: QuoteReducer
});

export default rootReducer;
