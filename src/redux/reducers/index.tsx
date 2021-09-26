import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { marketsReducer } from './marketsReducer';
import { coinReducer } from './coinReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  markets: marketsReducer,
  coin: coinReducer,
});
