import {valuesReducer} from './values';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  values: valuesReducer
})

export default rootReducer;