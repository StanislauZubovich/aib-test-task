import { ADD_MARKETS } from '../reducers/marketsReducer';

export const addMarketsAction = payload => ({
  type: ADD_MARKETS,
  payload,
});
